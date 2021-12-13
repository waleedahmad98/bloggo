import React from 'react'

export default function Pagination(props) {
    const pageNums = [];
    
    for (let i = 1; i<= Math.ceil(props.count / props.perPage); i++)
        pageNums.push(i);
    console.log(pageNums);
    return (
        <nav>
            <ul className='pagination d-flex justify-content-center'>
                {pageNums.map(n => (<li className='page-item'>
                    <a style = {{cursor: 'pointer'}} onClick={() => props.changePage(n)} className='page-link'>
                        {n}
                    </a>
                </li>))}
            </ul>
        </nav>
    )
}
