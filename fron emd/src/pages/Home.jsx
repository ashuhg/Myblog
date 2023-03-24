import React from "react"

export default function Home(){
  const posts =[
    {
      "id": 1,
      "title": "Beautiful Beach",
      "description": "A stunning view of a beach with crystal clear water and white sand.",
      "imgUrl": "https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      "id": 2,
      "title": "Cute Kittens",
      "description": "Two adorable kittens napping together in a cozy blanket.",
      "imgUrl": "https://images.pexels.com/photos/617278/pexels-photo-617278.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 3,
      "title": "Mountain Range",
      "description": "A spectacular view of a mountain range with a clear sky.",
      "imgUrl": "https://images.pexels.com/photos/3584230/pexels-photo-3584230.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 4,
      "title": "Puppy Love",
      "description": "A heartwarming moment of a puppy sleeping on his owner's lap.",
      "imgUrl": "https://images.pexels.com/photos/1700123/pexels-photo-1700123.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 5,
      "title": "Fall Colors",
      "description": "A beautiful tree in fall colors with a blue sky.",
      "imgUrl": "https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      "id": 6,
      "title": "City Life",
      "description": "A bustling city street with tall buildings and cars.",
      "imgUrl": "https://images.pexels.com/photos/290569/pexels-photo-290569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      "id": 7,
      "title": "Sunny Day",
      "description": "A sunny day with blue sky and puffy clouds.",
      "imgUrl": "https://images.pexels.com/photos/1566029/pexels-photo-1566029.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 8,
      "title": "Rainy Day",
      "description": "A rainy day with a colorful umbrella and a city street.",
      "imgUrl": "https://images.pexels.com/photos/2402285/pexels-photo-2402285.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },
    {
      "id": 9,
      "title": "Snowy Landscape",
      "description": "A snowy landscape with trees and a mountain range in the background.",
      "imgUrl": "https://images.pexels.com/photos/1580274/pexels-photo-1580274.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      "id": 10,
      "title": "Horse Riding",
      "description": "A majestic horse and its rider galloping along the beach at sunset.",
      "imgUrl": "https://images.pexels.com/photos/3610651/pexels-photo-3610651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    }
    
    
  ] 
  return (
    <div className="posts-grid">
      {posts.map(post => (
        <div key={post.id} className="post">
          <img src={post.img} alt={post.title} className="post-img" />
          <div className="post-text">
            <h3>{post.title}</h3>
            <p>{post.description}</p>
            <button className="read-more">Read More</button>
          </div>
        </div>
      ))}
    </div>
  )
}