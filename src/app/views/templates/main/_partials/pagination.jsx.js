import React, {PropTypes} from 'react';


const Pagination = ({total, page, links, loadFunction}) => {
    return (
        <div>

                    <h4><strong>Total</strong></h4>
                    <h4><strong>{total}</strong></h4>

                    <ul className="uk-pagination uk-margin-medium-top uk-margin-medium-bottom">
                        {links && links.first && links.first !== links.self &&
                        <li onClick={loadFunction.bind(null, links.first)}><span><i className="uk-icon-angle-double-left"/></span></li>}

                        {links && links.prev &&
                        <li onClick={loadFunction.bind(null, links.prev)}><span><i className="uk-icon-angle-left"/></span></li>}

                        <li className="uk-active"><span>{page}</span></li>

                        {links && links.next &&
                        <li onClick={loadFunction.bind(null, links.next)} ><a href="#"><i className="uk-icon-angle-right"/></a></li>}

                        {links && links.last && links.last !== links.self &&
                        <li onClick={loadFunction.bind(null, links.last)} ><a href="#"><i className="uk-icon-angle-double-right"/></a></li>}
                    </ul>

        </div>
    );
};

Pagination.propTypes = {
    total: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    links: PropTypes.object.isRequired,
    loadFunction: PropTypes.func.isRequired
};

export default Pagination;