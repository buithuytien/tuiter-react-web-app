const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img src="${who.avatarIcon}" width="50" class="rounded-circle float-start"/>
                </div>
                <div class="col-8">
                    <div class="fw-bold">${who.userName}
                        <span>
                            <i class="fas fa-check-circle fa-inverse"></i>
                        </span>
                    </div>
                    <div>@${who.handle}</div>
                </div>
                <div class="col-2">
                    <button class="rounded-pill float-end btn btn-primary mt-1">Follow</button>
                </div>
            </div>
        </li>
    `);
}

export default WhoToFollowListItem;