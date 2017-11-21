import React, { PropTypes } from "react";
import PaginationHOC from "./paginationHOC";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { setPagination } from "../../../../redux/actions/system.actions";

class Pagination extends React.PureComponent {
  //     total,
  //     page,
  //     links,
  //     loadFunction,
  //     numberOfPages,
  //     paginationSetter
  //   })
  //   {
  //   loadFunction.bind(null, links.first)

  componentWillReceiveProps(nextProps) {
    if (nextProps.paginationValue !== this.props.paginationValue) {
      this.props.loadFunction(
        this.props.links.first.replace(
          new RegExp("limit=[0-9]*"),
          "limit=" + nextProps.paginationValue
        )
      );
    }
  }

  render() {
    const {
      total,
      page,
      links,
      loadFunction,
      numberOfPages,
      paginationSetter,
      paginationValue
    } = this.props;

    // console.log(total, page, numberOfPages);
    // console.log(this.props);

    const itemsPerPage = paginationValue;
    const fromTaskNumber = (page - 1) * itemsPerPage + 1;
    const toTaskNumber = page * itemsPerPage;
    const selfLink = links.self;

    let untilBottom = page - 2 < 1 ? 1 : page - 2;
    let untilTop = page + 2 > numberOfPages ? numberOfPages : page + 2;
    let prevPagesLinks = [];
    let nextPagesLinks = [];

    if (selfLink) {
      for (let pageVar = page - 1; pageVar >= untilBottom; pageVar--) {
        //vlozi linku na zaciatok pola. lebo sa iteruje zhora dole
        prevPagesLinks.unshift({
          pageNr: pageVar,
          link: selfLink.replace("page=" + page, "page=" + pageVar)
        });
      }
      for (let pageVar = page + 1; pageVar <= untilTop; pageVar++) {
        //vlozi linku na koniec pola
        nextPagesLinks.push({
          pageNr: pageVar,
          link: selfLink.replace("page=" + page, "page=" + pageVar)
        });
      }
    }
    return (
      <div>
        {paginationSetter && paginationSetter}

        <ul className="uk-pagination uk-margin-medium-top uk-margin-medium-bottom">
          {links &&
            links.first &&
            links.first !== links.self && (
              <li onClick={loadFunction.bind(null, links.first)}>
                <a href="#" onClick={e => e.preventDefault()}>
                  <i className="uk-icon-angle-double-left" />
                </a>
              </li>
            )}

          {links &&
            links.prev && (
              <li onClick={loadFunction.bind(null, links.prev)}>
                <a href="#" onClick={e => e.preventDefault()}>
                  <i className="uk-icon-angle-left" />
                </a>
              </li>
            )}

          {/* linky na predosle pages */}
          {prevPagesLinks &&
            prevPagesLinks.map(item => (
              <li
                onClick={loadFunction.bind(null, item.link)}
                key={"prev" + item.pageNr}
              >
                <a href="#" onClick={e => e.preventDefault()}>
                  {item.pageNr}
                </a>
              </li>
            ))}
          {/* linky na predosle pages */}

          {/* aktualny link */}
          <li className="uk-active">
            <span>{page}</span>
          </li>
          {/* aktualny link */}

          {/* linky na dalsie pages */}
          {nextPagesLinks &&
            nextPagesLinks.map(item => (
              <li
                onClick={loadFunction.bind(null, item.link)}
                key={"next" + item.pageNr}
              >
                <a href="#" onClick={e => e.preventDefault()}>
                  {item.pageNr}
                </a>
              </li>
            ))}
          {/* linky na dalsie pages */}

          {links &&
            links.next && (
              <li onClick={loadFunction.bind(null, links.next)}>
                <a href="#" onClick={e => e.preventDefault()}>
                  <i className="uk-icon-angle-right" />
                </a>
              </li>
            )}

          {links &&
            links.last &&
            links.last !== links.self && (
              <li onClick={loadFunction.bind(null, links.last)}>
                <a href="#" onClick={e => e.preventDefault()}>
                  <i className="uk-icon-angle-double-right" />
                </a>
              </li>
            )}
        </ul>

        <p style={{ textAlign: "center" }}>
          Showing {fromTaskNumber} to{" "}
          {toTaskNumber < total ? toTaskNumber : total} of {total} entries<br />
          {page}/{numberOfPages}
        </p>
      </div>
    );
  }
}

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  links: PropTypes.object.isRequired,
  loadFunction: PropTypes.func.isRequired
};
// export default PaginationHOC(Pagination);

function mapStateToProps(state, ownProps) {
  return { paginationValue: state.settings.paginationValue };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ setPagination }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  PaginationHOC(Pagination)
);
