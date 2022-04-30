function internContainer(itnctr) {
    return ` <div class="w3-quarter">
        <img src="http://placehold.jp/3bc490/ffffff/150x150.png?text=EMPLOYEE%0AIMAGE"></img>
        <h3>${itnctr.getName()}</h3>
        <h4>${itnctr.getRole()}</h4>
        <h4>${itnctr.getId()}</h4>
        <h4>${itnctr.getEmail()}</h4>
        <h4>${itnctr.getSchool()}</h4>
        
    </div>
`;
}
module.exports = internContainer