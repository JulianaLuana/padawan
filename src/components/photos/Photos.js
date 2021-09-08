import React from 'react';
import { useParams } from 'react-router';
import './Photos.css';

var photosList = [
    {
    "albumId": 1,
    "id": 1,
    "title": "accusamus beatae ad facilis cum similique qui sunt",
    "url": "https://via.placeholder.com/600/92c952",
    "thumbnailUrl": "https://via.placeholder.com/150/92c952"
  },
  {
    "albumId": 1,
    "id": 2,
    "title": "reprehenderit est deserunt velit ipsam",
    "url": "https://via.placeholder.com/600/771796",
    "thumbnailUrl": "https://via.placeholder.com/150/771796"
  },
  {
    "albumId": 1,
    "id": 3,
    "title": "officia porro iure quia iusto qui ipsa ut modi",
    "url": "https://via.placeholder.com/600/24f355",
    "thumbnailUrl": "https://via.placeholder.com/150/24f355"
  },
  {
    "albumId": 2,
    "id": 51,
    "title": "non sunt voluptatem placeat consequuntur rem incidunt",
    "url": "https://via.placeholder.com/600/8e973b",
    "thumbnailUrl": "https://via.placeholder.com/150/8e973b"
  },
  {
    "albumId": 2,
    "id": 52,
    "title": "eveniet pariatur quia nobis reiciendis laboriosam ea",
    "url": "https://via.placeholder.com/600/121fa4",
    "thumbnailUrl": "https://via.placeholder.com/150/121fa4"
  },
  {
    "albumId": 2,
    "id": 53,
    "title": "soluta et harum aliquid officiis ab omnis consequatur",
    "url": "https://via.placeholder.com/600/6efc5f",
    "thumbnailUrl": "https://via.placeholder.com/150/6efc5f"
  },
  {
    "albumId": 3,
    "id": 101,
    "title": "incidunt alias vel enim",
    "url": "https://via.placeholder.com/600/e743b",
    "thumbnailUrl": "https://via.placeholder.com/150/e743b"
  },
  {
    "albumId": 3,
    "id": 102,
    "title": "eaque iste corporis tempora vero distinctio consequuntur nisi nesciunt",
    "url": "https://via.placeholder.com/600/a393af",
    "thumbnailUrl": "https://via.placeholder.com/150/a393af"
  },
  {
    "albumId": 3,
    "id": 103,
    "title": "et eius nisi in ut reprehenderit labore eum",
    "url": "https://via.placeholder.com/600/35cedf",
    "thumbnailUrl": "https://via.placeholder.com/150/35cedf"
    }
]

var Photos = () => {
    const {id} = useParams();

    return(
        <section className="Photos">
            <h1> Photos </h1>
            <div className="imagens">
            {
               photosList 
                .filter(x => {
                    if (x.albumId == id){
                        return true;
                    } else {
                        return false;
                    }
                })
                .map(x => {
                    return (
                        <img src={x.url} key={x.id}/>
                    )
                })
            }
            </div>
        </section>
    );
}

export default Photos;