export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

import * as BenchAPIUtil from '../util/bench_api_util';

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const fetchBenches = () => dispatch => (
  BenchAPIUtil.fetchBenches().then(
    benches => dispatch(receiveBenches(benches))
  )
);
