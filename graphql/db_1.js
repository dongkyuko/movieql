// export const people = [
//     {
//         id: "0",
//         name: "dongkyu",
//         age: 30,
//         gender: "female"
//     },
//     {
//         id: "1",
//         name: "a",
//         age: 12,
//         gender: "female"
//     },
//     {
//         id: "2",
//         name: "b",
//         age: 14,
//         gender: "male"
//     },
//     {
//         id: "3",
//         name: "c",
//         age: 15,
//         gender: "female"
//     },
//     {
//         id: "4",
//         name: "d",
//         age: 16,
//         gender: "male"
//     },
//     {
//         id: "5",
//         name: "e",
//         age: 20,
//         gender: "female"
//     },
//     {
//         id: "6",
//         name: "f",
//         age: 40,
//         gender: "male"
//     }
// ];

// export let movies = [
//     {
//         id: 0,
//         name: "a",
//         score: 0.1
//     },
//     {
//         id: 1,
//         name: "ab",
//         score: 8
//     },
//     {
//         id: 2,
//         name: "abc",
//         score: 99
//     },
//     {
//         id: 3,
//         name: "abcd",
//         score: 2
//     },
// ];

// export const getMoives = () => movies;

// export const getByIDPeople = id => {
//     const filteredPeople = people.filter(person => person.id === String(id));
//     return filteredPeople[0];
// };


export const getByID = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    return filteredMovies[0];
};

export const deleteMovie = id => {
    const cleanedMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleanedMovies.length) {
        movies = cleanedMovies;
        return true;
    } else {
        return false;
    }

}

export const addMovie = (name, score) => {
    const newMovie = {
        id: `${movies.length +1}`,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
}