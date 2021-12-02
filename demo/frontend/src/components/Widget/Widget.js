import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';
import s from './Widget.module.scss';
import classNames from 'classnames';
import Loader from '../Loader'; // eslint-disable-line
import AnimateHeight from 'react-animate-height';
import uuidv4 from 'uuid/v4'
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from 'reactstrap';

const Widget = ({
                  title = null,
                  className = '',
                  children = [],
                  close = false,
                  fullscreen = false,
                  collapse = false,
                  refresh = false,
                  settings = false,
                  settingsInverse = false,
                  tooltipPlacement = 'bottom',
                  showTooltip = false,
                  bodyClass = '',
                  customControls = false,
                  customClose = null,
                  customExpand = null,
                  customCollapse = null,
                  customFullscreen = null,
                  customReload = null,
                  customDropDown = null,
                  prompt = false,
                  collapsed = false,
                  options = {},
                  fetchingData = false,
                  widgetType = '',
                  updateWidgetData,
                  customBody,
                  attributes,
                }) => {
  const mainControls = !!(
    close ||
    fullscreen ||
    collapse ||
    refresh ||
    settings ||
    settingsInverse
  );
  const randomId = uuidv4();
  const [height, setHeight] = React.useState('auto');
  const [hideWidget, setHideWidget] = React.useState(false);
  const [collapseWidget, setCollapseWidget] = React.useState(!!collapsed);
  const [fullscreened, setFullscreened] = React.useState(false);
  const [reloading, setReloading] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [apiData, setApiData] = React.useState('');

  const toggleModal = () => {
    setModal((prevState) => !prevState);
  };

  const handleClose = () => {
    setHideWidget((prevState) => !prevState);
  };

  const handleCollapse = () => {
    let heightValue = collapseWidget ? 'auto' : 0;
    setHeight(heightValue);
    setCollapseWidget((prevState) => !prevState);
    setReloading(false);
  };

  const closeWithModal = () => {
    toggleModal();
    handleClose();
  };

  const handleExpand = () => {
    setHeight('auto');
    setCollapseWidget(false);
  };

  const handleReload = () => {
    const type = widgetType;
    if (type) {
      updateWidgetData(type);
    }
    setReloading(true);
    let endpoint = false;
    if (!endpoint) {
      setTimeout(() => setReloading(false), 2000);
    } else {
      setReloading(true);
      fetch('https://yourapi.com')
        .then((response) => response.json())
        .then((json) => setApiData(json.title))
        .then(setTimeout(() => setReloading(false), 1000));
    }
  };

  const handleFullscreen = () => {
    setFullscreened((prevState) => !prevState);
  };

  return (
    <React.Fragment>
    <section
      style={{display: hideWidget ? 'none' : ''}}
      className={
        classNames('widget', {'fullscreened' : !!fullscreened, 'collapsed' : !!collapseWidget}, s.widget, className, (reloading || fetchingData) ? s.reloading : '')
      } {...attributes}
      >
      {
        title && (
          typeof title === 'string'
            ? <h5 className={s.title}>{title}</h5>
            : <header className={s.title}>{title}</header>
        )
      }

      {
        !customControls && mainControls && (
          <div className={`${s.widgetControls} widget-controls`}>
            {settings && (
              <button><i className="la la-cog" /></button>
            )}
            {settingsInverse && (
              <button className={`bg-gray-transparent ${s.inverse}`}><i
                className="la la-cog text-white"
              /></button>
            )}
            {refresh && (
              <button onClick={handleReload} id={`reloadId-${randomId}`}>
                {typeof refresh === 'string' ?
                  <strong className="text-gray-light">{refresh}</strong> :
                  <i className="la la-refresh" />}
                {showTooltip && (
                  <UncontrolledTooltip
                    placement={tooltipPlacement}
                    target={`reloadId-${randomId}`}
                  >Reload</UncontrolledTooltip>
                )}
              </button>
            )}
            {fullscreen && (
              <button onClick={handleFullscreen} id={`fullscreenId-${randomId}`}>
                <i className={`la la-${fullscreened ? 'compress' : 'expand'}`} />
                {showTooltip && (
                  <UncontrolledTooltip
                    placement={tooltipPlacement}
                    target={`fullscreenId-${randomId}`}
                  >Fullscreen</UncontrolledTooltip>
                )}
              </button>
            )}
            {!fullscreened &&
              collapse && (
                <span>
                  <button onClick={handleCollapse} id={`collapseId-${randomId}`}>
                  <i className={`la la-angle-${!collapseWidget ? 'down' : 'up'}`} />
                    {showTooltip && (
                      <UncontrolledTooltip
                        placement={tooltipPlacement}
                        target={`collapseId-${randomId}`}
                      >Collapse</UncontrolledTooltip>
                    )}
                  </button>
                </span>
              )
            }
            {!fullscreened && (
              (close && !prompt) ? (
              <button onClick={handleClose} id={`closeId-${randomId}`}>
                {typeof close === 'string' ?
                  <strong className="text-gray-light">{close}</strong> :
                  <i className="la la-remove" />}
                {showTooltip && (
                  <UncontrolledTooltip
                    placement={tooltipPlacement}
                    target={`closeId-${randomId}`}
                  >Close</UncontrolledTooltip>
                )}
              </button>
            ) : (
              <button onClick={toggleModal} id={`closeId-${randomId}`}>
              {typeof close === 'string' ?
                <strong className="text-gray-light">{close}</strong> :
                <i className="la la-remove" />}
              {showTooltip && (
                <UncontrolledTooltip
                  placement={tooltipPlacement}
                  target={`closeId-${randomId}`}
                >Modal</UncontrolledTooltip>
              )}
            </button>
            ))}
          </div>
        )}
        {customDropDown && (
          <div className={`${s.widgetControls} widget-controls`}>
          <UncontrolledDropdown>
            <DropdownToggle
              tag="span"
              data-toggle="dropdown"

            >
              <i className="la la-cog" />
            </DropdownToggle>
            <DropdownMenu className="bg-widget-transparent" right>
              <DropdownItem onClick={handleReload} title="Reload">
                Reload &nbsp;&nbsp;
                <span className="badge badge-pill badge-success animated bounceIn">
                  <strong>9</strong>
                </span>
              </DropdownItem>

              <DropdownItem onClick={handleFullscreen} title={!fullscreened ? "Full Screen" : "Restore"}>{!fullscreened ? "Fullscreen" : "Restore"} </DropdownItem>
              <DropdownItem divider />
              {!fullscreened && (!prompt ? <DropdownItem onClick={handleClose} title="Close">Close</DropdownItem>
              : <DropdownItem onClick={toggleModal} title="Close">Close</DropdownItem>)}
            </DropdownMenu>
          </UncontrolledDropdown>
          </div>
        )}
      {
        customControls && (
          <div className={`${s.widgetControls} widget-controls`}>
            {!fullscreened && ((customClose && !prompt) ? (
              <button onClick={handleClose} id={`closeId-${randomId}`} className={s.customControlItem}><i title="Close" className="la la-times"/></button>
            ) : (
                <button onClick={toggleModal} id={`closeId-${randomId}`} className={s.customControlItem}><i title="Close" className="la la-times"/></button>
            ))}
            {!fullscreened && (customCollapse && (
                <button onClick={handleCollapse} id={`closeId-${randomId}`} className={s.customControlItem}><i title="Collapse" className={`la la-angle-${!collapseWidget ? 'down' : 'up'}`}/></button>
            ))}
            {customFullscreen && (
                <button onClick={handleFullscreen} id={`closeId-${randomId}`} className={s.customControlItem}><i title="Fullscreen" className={`la la-${fullscreened ? 'compress' : 'expand'}`} /></button>
            )}
            {customReload && (
                <button onClick={handleReload} id={`closeId-${randomId}`} className={s.customControlItem}><i title="I am spinning!" className="la la-refresh" /></button>
            )}
          </div>
        )
      }
      <AnimateHeight
        duration={ 500 }
        height={ height }
      >
        <div className={`${s.widgetBody} widget-body ${bodyClass}`}>
          {reloading || fetchingData ?  <Loader className={s.widgetLoader} size={40}/> : customBody ? (
              <div className="jumbotron handle bg-inverse text-white mb-0">
              <div className="container">
                <h1>Draggable story!</h1>
                <p className="lead">
                  <em>Build</em> your own
                  interfaces! Sit back and relax.
                </p>
                <p className="text-center">
                  <button onClick={handleFullscreen} className="btn btn-danger btn-lg">
                    {!fullscreened ?
                      <React.Fragment>Fullscreen me! &nbsp;
                        <i className="la la-check" />
                      </React.Fragment>
                      : 'Go Back'
                    }
                  </button>
                </p>
              </div>
            </div>
          ) : children}
        </div>

     </AnimateHeight>

    </section>
    {prompt && (
      <Modal isOpen={modal} toggle={toggleModal} id="news-close-modal">
      <ModalHeader toggle={toggleModal} id="news-close-modal-label">Sure?</ModalHeader>
      <ModalBody className="bg-white">
        Do you really want to unrevertably remove this super news widget?
      </ModalBody>
      <ModalFooter>
        <Button color="default" onClick={toggleModal} data-dismiss="modal">No</Button>{' '}
        <Button color="danger" onClick={closeWithModal} id="news-widget-remove">Yes,
          remove widget</Button>
      </ModalFooter>
    </Modal>
    )}
    <div style={{display: fullscreened ? 'block'  : 'none'}} className={s.widgetBackground}></div>
    </React.Fragment>
  );
}

export default Widget;
