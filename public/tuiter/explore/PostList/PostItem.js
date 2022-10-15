const PostItem = (post) => {
    if (post.postheadline) {
        return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                      <img src=${post.image} class = "rounded-circle" 
                        width="50"
                        height="50"
                      />
                </div>
                <div class="col-11 ps-4">
                      <span class = "fw-bold float-start">
                        ${post.username}
                      </span>
                      <span class="ps-2">
                        <i class="fas fa-check-circle fa-inverse"></i>
                      </span>
                      <span class="wd-under-text-color ps-1">
                        @${post.handle} &middot ${post.time}
                      </span>
                      <span class="float-end">
                        <i class="fas fa-ellipsis-h fa-inverse"></i>
                      </span>
                      <div>
                        ${post.caption}
                      </div>
                    
                      <div class="mt-2 wd-tweet-and-image">
                        <div class="wd-thumbnail">
                            <img class = "wd-tweet-pic" src="${post.postimage}"
                           />
                        </div>
                        <div class="pt-2 ps-3 pe-3">
                            ${post.postheadline}
                        </div>
                        <div class="wd-under-text-color ps-3 pe-3 ">
                            ${post.postcontent}
                        </div>
                        <div class = "wd-under-text-color pb-2 ps-3 pe-3">
                            <i class="fas fa-link"></i> ${post.postlink}
                        </div>
                      </div>
                      <div class="row mt-3 mb-2">
                        <div class="col-3 wd-under-text-color">
                            <i class = "far fa-comment me-2"></i> ${post.numcomments}
                        </div>
                        <div class="col-3 wd-under-text-color">
                            <i class = " fas fa-retweet me-2"></i> ${post.numretweets}
                        </div>
                        <div class="col-3 wd-under-text-color">
                            <i class = "far fa-heart me-2"></i> ${post.numlikes}
                        </div>
                        <div class="col-3 wd-under-text-color">
                            <i class = "fas fa-upload"></i>
                        </div>
                      </div>
                   
                </div>
            </div>
        </li>
    `);
    }
    else {
        return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-1">
                      <img src=${post.image} class = "rounded-circle" 
                        width="50"
                        height="50"
                      />
                </div>
                <div class="col-11 ps-4">
                      <span class = "fw-bold float-start">
                        ${post.username}
                      </span>
                      <span class="ps-2">
                        <i class="fas fa-check-circle fa-inverse"></i>
                      </span>
                      <span class="wd-under-text-color ps-1">
                        @${post.handle} &middot ${post.time}
                      </span>
                      <span class="float-end">
                        <i class="fas fa-ellipsis-h fa-inverse"></i>
                      </span>
                      <div>
                        ${post.caption}
                      </div>
                    
                      <div class="mt-2 wd-tweet-and-image">
                        <div class="wd-thumbnail">
                            <img class = "wd-tweet-pic-only" src="${post.postimage}"
                           />
                        </div>
                      </div>
                      <div class="row mt-3 mb-2">
                        <div class="col-3 wd-under-text-color">
                            <i class = "far fa-comment me-2"></i> ${post.numcomments}
                        </div>
                        <div class="col-3 wd-under-text-color">
                            <i class = " fas fa-retweet me-2"></i> ${post.numretweets}
                        </div>
                        <div class="col-3 wd-under-text-color">
                            <i class = "far fa-heart me-2"></i> ${post.numlikes}
                        </div>
                        <div class="col-3 wd-under-text-color">
                            <i class = "fas fa-upload"></i>
                        </div>
                      </div>
                   
                </div>
            </div>
        </li>
    `);
    }
}

export default PostItem;