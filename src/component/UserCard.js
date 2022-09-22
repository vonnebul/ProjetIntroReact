import '../style/UserCard.css'
function UserCard() {
	const Users = [{name: 'Thomas',
                    commentaire: "rien a dire",
                    connaissance: true},
                    {name: 'Maxime',
                    commentaire: "rien a dire",
                    connaissance: false},
                    {name: 'Alexis',
                    commentaire: "rien a dire",
                    connaissance: false},
                    {name: 'Julien',
                    commentaire: "rien a dire",
                    connaissance: true},
                    {name: 'Kim',
                    commentaire: "rien a dire",
                    connaissance: false}
                    ]

	// ici la liste est posé en brut, mais plus tard on pourrait par exemple la remplacer
	return (
		<ul>
            {Users.map((user, index) => (
                <div>
                <li key={`${user.name}-${index}`} className={index % 2 === 0 ? "blue_card": "white_card"}>
                    {user.name} 
                    <br/> 
                    {user.commentaire}
                    <br/>
                    {user.connaissance ? "suivi" : "suivre"}
                </li>
                </div>
            ))}
		</ul>
	)
}
export default UserCard