import {
  attachParams,
  RCA_RELATIVE_URL,
  BASE_URL
} from '../../utils/url-helper';
import {
  DASHBOARDAGGREGATIONREQUEST,
  DASHBOARDAGGREGATIONSUCCESS,
  DASHBOARDAGGREGATIONFAILURE,
  DASHBOARDRCAANALYSISREQUEST,
  DASHBOARDRCAANALYSISSUCCESS,
  DASHBOARDRCAANALYSISFAILURE,
  DASHBOARDDIMENSIONREQUEST,
  DASHBOARDDIMENSIONSUCCESS,
  DASHBOARDDIMENSIONFAILURE,
  DASHBOARDHIERARCHICALFAILURE,
  DASHBOARDHIERARCHICALSUCCESS,
  DASHBOARDHIERARCHICALREQUEST
} from './ActionConstants';
import { getRequest } from '../../utils/http-helper';

export const dashboardAggregationRequested = () => {
  return {
    type: DASHBOARDAGGREGATIONREQUEST
  };
};

export const dashboardAggregationSuccess = (response) => {
  return {
    type: DASHBOARDAGGREGATIONSUCCESS,
    data: response
  };
};

export const dashboardAggregationFailure = () => {
  return {
    type: DASHBOARDAGGREGATIONFAILURE
  };
};

export const getDashboardAggregation = (id, params) => {
  return async (dispatch) => {
    const url = attachParams(
      `${RCA_RELATIVE_URL}/${id}/kpi-aggregations`,
      params
    );
    dispatch(dashboardAggregationRequested());
    const { data, error, status } = await getRequest({
      url: url
    });
    if (error) {
      dispatch(dashboardAggregationFailure());
    } else if (data && status === 200) {
      dispatch(dashboardAggregationSuccess(data.data));
    }
  };
};

export const dashboardRcaAnalysisRequested = () => {
  return {
    type: DASHBOARDRCAANALYSISREQUEST
  };
};

export const dashboardRcaAnalysisSuccess = (response) => {
  return {
    type: DASHBOARDRCAANALYSISSUCCESS,
    data: response
  };
};

export const dashboardRcaAnalysisFailure = () => {
  return {
    type: DASHBOARDRCAANALYSISFAILURE
  };
};

export const getDashboardRcaAnalysis = (id, params) => {
  return async (dispatch) => {
    const url = attachParams(`${RCA_RELATIVE_URL}/${id}/rca-analysis`, params);
    dispatch(dashboardRcaAnalysisRequested());
    const { data, error, status } = await getRequest({
      url: url
    });
    if (error) {
      dispatch(dashboardRcaAnalysisFailure());
    } else if (data && status === 200) {
      dispatch(dashboardRcaAnalysisSuccess(data.data));
    }
  };
};

export const getAlldashboardDimensionRequest = () => {
  return {
    type: DASHBOARDDIMENSIONREQUEST
  };
};

export const getAlldashboardDimensionSuccess = (response) => {
  return {
    type: DASHBOARDDIMENSIONSUCCESS,
    data: response
  };
};

export const getAlldashboardDimensionFailure = () => {
  return {
    type: DASHBOARDDIMENSIONFAILURE
  };
};

export const getAllDashboardDimension = (id) => {
  return async (dispatch) => {
    dispatch(getAlldashboardDimensionRequest());
    const url = `${BASE_URL}/api/kpi/${id}/get-dimensions `;
    const { data, error, status } = await getRequest({
      url: url
    });
    if (error) {
      dispatch(getAlldashboardDimensionFailure());
    } else if (data && status === 200) {
      dispatch(getAlldashboardDimensionSuccess(data));
    }
  };
};

export const getAllHierarchicalRequest = () => {
  return {
    type: DASHBOARDHIERARCHICALREQUEST
  };
};

export const getAllHierarchicalSuccess = (response) => {
  return {
    type: DASHBOARDHIERARCHICALSUCCESS,
    data: response
  };
};

export const getAllHierarchicalFailure = () => {
  return {
    type: DASHBOARDHIERARCHICALFAILURE
  };
};

export const getAllDashboardHierarchical = (id, params) => {
  return async (dispatch) => {
    const url = attachParams(
      `${RCA_RELATIVE_URL}/${id}/rca-hierarchical-data`,
      params
    );
    dispatch(getAllHierarchicalRequest());
    const { data, error, status } = await getRequest({
      url: url
    });
    if (error) {
      dispatch(getAllHierarchicalFailure());
    } else if (data && status === 200) {
      dispatch(getAllHierarchicalSuccess(data.data));
    }
  };
};
