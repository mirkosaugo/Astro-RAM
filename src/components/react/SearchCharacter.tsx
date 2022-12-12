import React, { useRef, useState } from 'react'
import { searchCharacter } from "src/lib/characters"
import { ICharacter } from '@localTypes/characters';

const SearchCharacter = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [results, setResults] = useState<ICharacter[] | []>([]);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const value = inputRef.current?.value;
    if(value === '') return
    const response: ICharacter[] = await searchCharacter(value);
    setResults(response);
  };

  return (
    <div className="mt-48">
      <div className="flex items-center mb-10 head">
        <h3 className="mr-4 text-3xl uppercase font-mona tablet:text-5xl">
          Search a Character
        </h3>
        <svg
          className="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-11.5 -10.232 23 20.463"
        >
          <circle r="2.05" fill="#61dafb" />
          <g stroke="#61dafb" fill="none">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      </div>

      <form onSubmit={handleFormSubmit}>
        <div className="flex">
          <div className="relative w-full">
            <input
              ref={inputRef}
              type="search"
              className="block py-2.5 px-6 w-full z-20 text-2xl text-gray-900 bg-primary rounded-lg border focus:outline-none"
              placeholder="Rick, Morty, etc..."
              required
            />
            <button
              type="submit"
              className="absolute top-0 right-0 p-4 text-sm font-medium text-black border rounded-r-lg bg-accent border-accent"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </div>
        </div>
      </form>

      <div className="grid gap-4 mt-12 tablet:grid-cols-4 laptop:grid-cols-6 desktop:grid-cols-8 ">
        {results.length > 0 ? (
          results.map((character: ICharacter) => (
            <div className="flex items-center" key={character.id}>
              <img className="w-12 h-12 mr-4 rounded-full" src={character.image} alt={character.name} lazy />
              <h1>{character.name}</h1>
            </div>
          ))) : null
        }
      </div>
    </div>
  )
}

export default SearchCharacter

