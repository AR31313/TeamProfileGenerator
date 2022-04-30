function engineerContainer(engctr) {
    return ` <div class="w3-quarter">
        <img src="http://placehold.jp/3bc490/ffffff/150x150.png?text=EMPLOYEE%0AIMAGE"></img>
        
        <h3>${engctr.getName()}</h3>
        <h4>${engctr.getId()}</h4>
        <h4>${engctr.getEmail()}</h4>
        <h4>${engctr.getRole()}</h4>
        <h4>${engctr.getGitHub()}</h4>
        
    </div > `;
}
module.exports = engineerContainer;