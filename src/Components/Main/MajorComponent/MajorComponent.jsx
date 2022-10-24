import React from 'react';
import NewArrivalsComponent from '../../NewArivals/NewArrivals';
import MainPosterComponent from '../../MainPoster/MainPosterComponent';
import SearchBar from '../../SearchBar/SearchBar';



const MajorComponent = () => {
  return (
    <>
        <SearchBar/>
        <MainPosterComponent/>
        <NewArrivalsComponent/>
    </>
  )
}

export default MajorComponent
