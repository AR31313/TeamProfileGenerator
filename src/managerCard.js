function managerContainer(mgrctr) {
    return `<div class="w3-quarter">
        <img src="http://placehold.jp/3bc490/ffffff/150x150.png?text=EMPLOYEE%0AIMAGE"></img>
        <h3>${mgrctr.getName()}</h3>
        <h4>${mgrctr.getRole()}</h4>
        <h4>${mgrctr.getId()}</h4>
        <h4>${mgrctr.getEmail()}</h4>
        <h4>${mgrctr.getofficeNum()}</h4>
        
    </div>
`;
}
module.exports = managerContainer;