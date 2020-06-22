export default async function fetcheventdata(){
    //let next_json_url = 'https://www.eventbriteapi.com/v3/users/me/owned_events/'
    let json_url = 'https://www.eventbriteapi.com/v3/users/me/owned_events/'

    let results = [];
    // create new function to hold bulk of the work
    function fetchNextJson(url){
            const bearer = 'Bearer RKNNF33PZANGF6SVYJMT';
            return fetch(url,{
                // request type
                method:'GET',
                credentials: 'same-origin', // include, *same-origin, omit
                headers:{// content type
                        "Content-Type": "application/json",
                        //authorization
                        "Authorization": bearer
                        }   
            })
        .then(response => response.json())
        .then(function (jsonResponse) {
                    results = [...results, ...jsonResponse.events];
                    //results.push(jsonResponse.events);
                    return jsonResponse.pagination.has_more_items
                        ? fetchNextJson('https://www.eventbriteapi.com/v3/events/?continuation='+jsonResponse.pagination.continuation)
                        : results
                    }
        )
        .catch(
            function(err) {
              console.error('Error Occured:' +err);
            }
        );
    }
    await fetchNextJson(json_url)
    /*
    await fetchNextJson(json_url).then(function(res) {

    })
    */
    return results

}