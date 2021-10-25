import { useContext } from 'react';
import MyContext from '../context/Context';
import useFetchApi from './useFetchApi';

export default function useSort() {
    const { setListPlanets } = useContext(MyContext);
    const { data } = useFetchApi();

    function handleSort(sort, column) {
        const number = -1;
        let sortColumns = [];

        switch (sort, column) {
            case 'ASC':
							sortColumns = (
								data.sort((a, b) => {
									if (a[column] > b[column]) {
										return 1;
									}
									if (a[column] < b[column]) {
										return number;
									}
									return 0;
								})
							)
							return setListPlanets(sortColumns);
            case 'DESC':
							sortColumns = (
								data.sort((a, b) => b[column] - a[column])
							)
							console.log(sortColumns);
							return setListPlanets(sortColumns);
            default:
							return data;
        }
    }
		return [handleSort];
}