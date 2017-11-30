import React from "react";
import { timestampToDateString } from "../../../../../services/general";
import Image from "../../../../../components/Main/Image";
import { LOAD_ATTACHMENT } from "../../../../../../api/urls";

const commentList = ({ task, handleFileDownload }) => {
  let comments = [];
  if (task && Object.keys(task.comments).length) {
    Object.keys(task.comments).map(key => {
      comments.unshift(task.comments[key]);
      return null;
    });

    if (task.loggedUserProjectAcl.indexOf("view_internal_note") === -1) {
      comments = comments.filter(c => c.internal === false);
    }
  }

  return (
    <div className="timeline">
      <hr />
      {comments.map(comment => {
        let key = comment.id;
        let date = timestampToDateString(comment.createdAt);

        let username = comment.createdBy.username;
        let initials =
          (comment.createdBy.name ? comment.createdBy.name.charAt(0) : "") +
          (comment.createdBy.surname
            ? comment.createdBy.surname.charAt(0)
            : "");
        if (initials === "") {
          initials = username.charAt(0);
        }
        // let attachments=[];
        let avatar = (
          <div className="timeline_icon timeline_icon_success">
            <p className="md-user-letters md-bg-cyan">{initials}</p>
          </div>
        );

        if (comment.createdBy.avatarSlug) {
          avatar = (
            <div
              className="user_heading_avatar fileinput fileinput-new"
              data-provides="fileinput"
            >
              <div className="fileinput-new thumbnail">
                <Image
                  src={LOAD_ATTACHMENT + "/" + comment.createdBy.avatarSlug}
                  staticSrc="/assets/img/avatars/user.png"
                  fetchFromApi={true}
                  alt="user avatar"
                />
              </div>
            </div>
          );
        }

        if (comment.email) {
          avatar = (
            <div className="timeline_icon timeline_icon_primary">
              <i className="material-icons">&#xE163;</i>
            </div>
          );
        }

        return (
          <div className="timeline_item" key={key}>
            {avatar}

            <article
              className={
                comment.internal ? "uk-comment private-note" : "uk-comment"
              }
            >
              <header
                className="uk-comment-header"
                style={{ paddingTop: "8px" }}
              >
                <div className="uk-grid" data-uk-grid-margin>
                  {!comment.email && (
                    <div className="uk-width-medium-3-4">
                      <p className="uk-comment-title">
                        {username}
                        <span
                          className="uk-comment-title uk-text-italic"
                          style={{ marginLeft: "10px" }}
                        >
                          {comment.internal
                            ? "posted a private note"
                            : "posted note"}
                        </span>
                      </p>
                    </div>
                  )}

                  {comment.email && (
                    <div className="uk-width-medium-3-4">
                      <p className="uk-comment-title">
                        <span className="uk-comment-title uk-text-italic">
                          From:
                        </span>
                        {comment.createdBy.email}
                      </p>
                      <p className="uk-comment-title">
                        <span className="uk-comment-title uk-text-italic">
                          To:{" "}
                        </span>
                        {comment.email_to}
                      </p>
                      <p className="uk-comment-title">
                        <span className="uk-comment-title uk-text-italic">
                          Cc:{" "}
                        </span>
                        {comment.email_cc}
                      </p>
                      <br />
                      <p className="uk-comment-title">
                        <span className="uk-comment-title uk-text-italic">
                          Subject:{" "}
                        </span>
                        {comment.title}
                      </p>
                      <br />
                    </div>
                  )}

                  <div className="uk-width-medium-1-4">
                    <div className="uk-comment-meta text-allign-right">
                      {date}
                    </div>
                  </div>
                </div>
              </header>

              <div style={{ marginLeft: "10px" }}>
                <p>{comment.body}</p>

                {comment.commentHasAttachments.map(att => {
                  return (
                    <a
                      href="#"
                      key={att.id}
                      className="md-color-blue-900"
                      onClick={handleFileDownload.bind(null, att.slug)}
                    >
                      <span>
                        <i className="material-icons md-color-blue-900">
                          &#xE226;
                        </i>
                        {att.slug}
                      </span>
                    </a>
                  );
                })}
              </div>
            </article>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default commentList;
