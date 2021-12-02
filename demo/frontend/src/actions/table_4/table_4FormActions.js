import axios from 'axios';
import Errors from 'components/FormItems/error/errors';
import { push } from 'connected-react-router';
import { doInit } from 'actions/auth';
import { toast } from 'react-toastify';

const actions = {
  doNew: () => {
    return {
      type: 'TABLE_4_FORM_RESET',
    };
  },

  doFind: (id) => async (dispatch) => {
    try {
      dispatch({
        type: 'TABLE_4_FORM_FIND_STARTED',
      });

      axios.get(`/table_4/${id}`).then(res => {
        const record = res.data;

        dispatch({
          type: 'TABLE_4_FORM_FIND_SUCCESS',
          payload: record,
        });
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TABLE_4_FORM_FIND_ERROR',
      });

      dispatch(push('/admin/table_4'));
    }
  },

  doCreate: (values) => async (dispatch) => {
    try {
      dispatch({
        type: 'TABLE_4_FORM_CREATE_STARTED',
      });

      axios.post('/table_4', { data: values }).then(res => {
        dispatch({
          type: 'TABLE_4_FORM_CREATE_SUCCESS',
        });

        toast.success('Table_4 created');
        dispatch(push('/admin/table_4'));
      })
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TABLE_4_FORM_CREATE_ERROR',
      });
    }
  },

  doUpdate: (id, values, isProfile) => async (
    dispatch,
    getState,
  ) => {
    try {
      dispatch({
        type: 'TABLE_4_FORM_UPDATE_STARTED',
      });

      await axios.put(`/table_4/${id}`, {id, data: values});

      dispatch(doInit());

      dispatch({
        type: 'TABLE_4_FORM_UPDATE_SUCCESS',
      });

      if (isProfile) {
        toast.success('Profile updated');
      } else {
        toast.success('Table_4 updated');
        dispatch(push('/admin/table_4'));
      }
    } catch (error) {
      Errors.handle(error);

      dispatch({
        type: 'TABLE_4_FORM_UPDATE_ERROR',
      });
    }
  },
};

export default actions;
