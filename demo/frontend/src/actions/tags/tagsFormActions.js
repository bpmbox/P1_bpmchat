import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'TAGS_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'TAGS_FORM_FIND_STARTED',
      });

      axios.get(`/tags/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'TAGS_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TAGS_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/tags'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'TAGS_FORM_CREATE_STARTED',
      });

      axios.post('/tags', { data: values }).then(res => {
        dispatch({
          type: 'TAGS_FORM_CREATE_SUCCESS',
        });

        toast.success('Tags created');
        dispatch(push('/admin/tags'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TAGS_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'TAGS_FORM_UPDATE_STARTED',
      });

      await axios.put(`/tags/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'TAGS_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Tags updated');
        dispatch(push('/admin/tags'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TAGS_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
