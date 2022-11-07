import React from 'react'

export default function newsdetails({newsItem}) {

 // Render data...

//   console.log(newsItem)
    return (
        <main>
            <div>
             

                <div key={newsItem.id}>
                <h1>{newsItem.title}</h1>
                <p>{newsItem.body}</p>
                  </div>
           

            </div>

        </main>

    )
}


export async function getServerSideProps(context) {
    // This gets called on every request

    // console.log(context.params.id)
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+ context.params.id)
    // Fetch data from external API
    const newsItem = await res.json();
    // console.log(newsdetails)

    return {
        props: {
            newsItem
        }, // will be passed to the page component as props
    }
}
