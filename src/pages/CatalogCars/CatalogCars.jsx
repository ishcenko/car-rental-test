import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import NavBar from 'components/NavBar/NavBar';
import CarItem from 'components/CarItem/CarItem';
import { WrapperFiltered, WrapperList, LoadMore } from './CatalogCars.styled';
import { setGetAdvertsQuery, useGetCarPageQuery } from '../../redux/operation';

export default function CatalogCars() {
  const [page, setPage] = useState(1);
  const [allCars, setAllCars] = useState([]);
  const { data, error, isLoading, isFetching } = useGetCarPageQuery(page);
  const { data: allAdverts } = setGetAdvertsQuery();

  const [filter, setFilter] = useState({
    make: '',
    filterPrice: [],
    min: '',
    max: [],
  });
  const [filterAdverts, setFilterAdverts] = useState(null);
  const [isFilter, setIsFilter] = useState(false);

  const loadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (data) {
      setAllCars(prevCatalog => [...prevCatalog, ...data]);
    }
  }, [data]);

  useEffect(() => {
    if (isFetching) {
      if (
        filter.make ||
        filter.filterPrice.length > 0 ||
        filter.min ||
        filter.max
      ) {
        const filterAdverts = allAdverts.filter(adverts => {
          if (filter.make && adverts.make !== filter.make.value) {
            return false;
          }
          if (
            filter.filterPrice.length > 0 &&
            !filter.filterPrice.some(
              priceObj =>
                priceObj.value === adverts.rentalPrice.replace('$', '')
            )
          ) {
            return false;
          }
          if (filter.min && adverts.run < filter.min) {
            return false;
          }
          if (filter.max && adverts.run > filter.max) {
            return false;
          }
          return true;
        });
        setFilterAdverts(filterAdverts);
      } else {
        setFilterAdverts([]);
      }
    }
  }, [filter, allAdverts, isFetching]);

  const makeSence = allAdverts
    ? [...new Set(allAdverts.map(adverts => adverts.make))]
    : [];
  const prices = allAdverts
    ? [
        ...new Set(
          allAdverts.map(adverts => adverts.rentalPrice.replace('$', ''))
        ),
      ]
    : [];
  const run = allAdverts
    ? [...new Set(allAdverts.map(adverts => adverts.run))]
    : [];
  const min = Math.min(...run);
  const max = Math.max(...run);

  return (
    <>
      <NavBar />
      <WrapperFiltered>
        <Filtered
          makeSence={makeSence}
          prices={prices}
          min={min}
          max={max}
          onFilterChange={newFilters => {
            filterAdverts(newFilters);
            setIsFilter(true);
          }}
          filters={filter}
        />
      </WrapperFiltered>
      <WrapperList>
        {isFetching ? (
          filterAdverts !== null && filterAdverts.length > 0 ? (
            filterAdverts.map((car, index) => (
              <CarsItems key={index} data={car} />
            ))
          ) : (
            <div>No matches found.</div>
          )
        ) : error ? (
          <>Oops, error</>
        ) : isLoading ? (
          <Loader />
        ) : allCars.length > 0 ? (
          allCars.map((car, index) => <CarItem key={index} data={car} />)
        ) : null}
        {!isFiltering && data && data.length >= 8 && (
          <LoadMore variant="text" onClick={loadMore} disabled={isFetching}>
            Load more
          </LoadMore>
        )}
      </WrapperList>
    </>
  );
}
