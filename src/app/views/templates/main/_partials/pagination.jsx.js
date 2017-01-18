import React, {PropTypes} from 'react';


const Pagination = ({total, page, links, loadFunction}) => {
    return (
        <table>
            <tbody>
            <tr>
                <td>
                    <h4><strong>Total</strong></h4></td>
                <td>
                    <h4><strong>{total}</strong></h4></td>

                <td colSpan="3">
                    {links && links.first && links.first !== links.self &&
                    <button type="button" className="btn btn-primary" onClick={loadFunction.bind(null, links.first)}>
                        <i className="fa fa-angle-left left"/><i className="fa fa-angle-left left"/></button>}
                    {links && links.prev &&
                    <button type="button" className="btn btn-primary" onClick={loadFunction.bind(null, links.prev)}>
                        <i className="fa fa-angle-left left"/></button>}

                    <button type="button" className="btn btn-success" >{page}</button>

                    {links && links.next &&
                    <button type="button" className="btn btn-primary" onClick={loadFunction.bind(null, links.next)}>
                        <i className="fa fa-angle-right right"/></button>}
                    {links && links.last && links.last !== links.self &&
                    <button type="button" className="btn btn-primary" onClick={loadFunction.bind(null, links.last)}>
                        <i className="fa fa-angle-right right"/><i className="fa fa-angle-right right"/></button>}
                </td>
            </tr>
            </tbody>
        </table>
    );
};

Pagination.propTypes = {
    total: PropTypes.number.isRequired,
    page: PropTypes.number.isRequired,
    links: PropTypes.object.isRequired,
    loadFunction: PropTypes.func.isRequired
};

export default Pagination;