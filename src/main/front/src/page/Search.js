import '../css/Search.css'
import axios from 'axios'
import qs from 'qs'
import { useState , useEffect} from 'react';


function Search() {
    const [postData, setPostData] = useState('');

    useEffect(() => {

        const subcategoryIds = [1, 2, 3, 4];

        axios.defaults.paramsSerializer = params => {
            return qs.stringify(subcategoryIds);
        }


        const searchParam = {
            subcategoryIds: subcategoryIds.join(",")
        }

        axios.get('/postData', {
            params: {subcategoryIds}
                .then(response => {
                    setPostData(response.data)
                })
        });


    }, []);


            return (
                <div>
                    백엔드 : {postData}
                </div>
            );
  }

        export default Search;