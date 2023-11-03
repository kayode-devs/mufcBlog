
export const Materials = ({data}) =>{
    console.log(data);
    return(
        <div>
            {data.title[0]}
        </div>  
    )
}

export const getServerSideProps = async () =>{
    try{
      const data = await GetMaterials();
      return{
        props: {data},
      }
    }
    catch (error) {
      return{
        props: {error: 'An error occured while fetching data'}
      }
    }
  }