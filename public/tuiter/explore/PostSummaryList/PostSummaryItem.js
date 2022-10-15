const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-9 col-md-10">
                    <div class="wd-under-text-color">${post.topic}</div>
                    <div>
                        <span class="fw-bold">
                            ${post.userName}
                        </span>
                        <span>
                          <i class="fas fa-check-circle fa-inverse"></i>
                        </span>
                        <span class="wd-under-text-color">
                         - ${post.time}
                        </span>
                    </div>
                    <div class="fw-bold">${post.title}</div>
                </div>
                <div class="col-3 col-md-2">
                    <img src="${post.image}"
                         width="85"
                         height="85"
                         class="float-end"
                         style="border-radius: 10px"/>
                </div>
            </div>
        </li>
    `);
}

export default PostSummaryItem;