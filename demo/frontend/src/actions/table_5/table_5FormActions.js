import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'TABLE_5_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'TABLE_5_FORM_FIND_STARTED',
      });

      axios.get(`/table_5/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'TABLE_5_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TABLE_5_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/table_5'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'TABLE_5_FORM_CREATE_STARTED',
      });

      axios.post('/table_5', { data: values }).then(res => {
        dispatch({
          type: 'TABLE_5_FORM_CREATE_SUCCESS',
        });

        toast.success('Table_5 created');
        dispatch(push('/admin/table_5'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TABLE_5_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'TABLE_5_FORM_UPDATE_STARTED',
      });

      await axios.put(`/table_5/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'TABLE_5_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Table_5 updated');
        dispatch(push('/admin/table_5'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TABLE_5_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
