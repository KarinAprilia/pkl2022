import React from 'react'

import Button from 'elements/Button'

export default function Categories ({ data }) {
 return data.map( (category, index1) => {
        return (
            <section className="container" key={"category-${index2}"}>
                <h4 className="mb-3 font-weight-medium">{category.name}</h4>
                <div className="container-grid">
                    {category.items.length === 0 ? (
                        <div className="row">
                            <div className="col-auto align-items-center">
                                There is no property at this category
                            </div>
                        </div>
                    ) : (
                        category.item.map((item, index2) => {
                            return (
                                <div
                                className="item colum-3 row-1"
                                key={`category-${index1}-item-${$index2}`}
                                >
                                    <div className="card">
                                        {item.isPopular && (
                                            <div className="tag">
                                                Popular{""}
                                                
                                        )}
                                    </div>
                                </div>
                            )
                        })
                    )