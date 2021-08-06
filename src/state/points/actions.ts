import { Dispatch } from 'redux';

import { getCoords } from '@services/coords';
import { getPoints } from '@services/point';
import {
    LoadingEndAction,
    LoadingStartAction,
    ModalShowAction,
} from '@state/global/actions';

import { GetPoints, Point, PointsActionTypes } from './types';

export const GetPointsSuccessAction = (points: Point[]): GetPoints => ({
    type: PointsActionTypes.GET_POINTS_SUCCESS,
    payload: points,
});

export const GetPointsCoordsAction =
    (points: Omit<Point, 'coords'>[]) => (dispatch: Dispatch<any>) => {
        dispatch(LoadingStartAction('Загрузка координат пунктов выдачи ...'));
        Promise.all(
            points.map((point) =>
                getCoords(`${point.cityId.name} ${point.address}`)
            )
        )
            .then((coords) => {
                dispatch(
                    GetPointsSuccessAction(
                        points.map((point, index) => ({
                            ...point,
                            coords: coords[index],
                        }))
                    )
                );
            })
            .catch((error) => {
                dispatch(
                    ModalShowAction({
                        head: 'Ошибка!',
                        body: error.response.data,
                    })
                );
            })
            .finally(() => {
                dispatch(
                    LoadingEndAction('Загрузка координат пунктов выдачи ...')
                );
            });
    };

export const GetPointsAction = () => (dispatch: Dispatch<any>) => {
    dispatch(LoadingStartAction('Загрузка пунктов выдачи ...'));
    getPoints()
        .then((data) => data.filter((point) => point.cityId))
        .then((data) => {
            dispatch(GetPointsCoordsAction(data));
        })
        .catch((error) => {
            dispatch(
                ModalShowAction({
                    head: 'Ошибка!',
                    body: error.response.data,
                })
            );
        })
        .finally(() => {
            dispatch(LoadingEndAction('Загрузка пунктов выдачи ...'));
        });
};
