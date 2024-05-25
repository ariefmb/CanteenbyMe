import { FC } from 'react';
import { useInstantSearch } from 'react-instantsearch-hooks-web';

const SearchResults: FC = () => {
  const { results } = useInstantSearch();

  return (
    <div>
      {results?.hits.map((hit) => (
        <div>
          <div>
            <p>{hit.title}</p>
          </div>
          <div>
            <p>{hit.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
