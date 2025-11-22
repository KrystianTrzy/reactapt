import React from "react";
import "./dashboard.css";

const Dashboard = () => {
	// Przykładowe dane
	const user = { name: "Krystian" };
	const stats = {
		posts: 12,
		likes: 34,
		comments: 8,
	};
	const activities = [
		{ id: 1, text: "Dodałeś nowy post" },
		{ id: 2, text: "Polubiłeś post użytkownika Anna" },
		{ id: 3, text: "Skomentowałeś post użytkownika Marek" },
	];

	return (
		<div className="dashboard-container">
			<h1>Witaj, {user.name}!</h1>
			<div className="dashboard-stats">
				<div className="stat">
					<span className="stat-number">{stats.posts}</span>
					<span className="stat-label">Posty</span>
				</div>
				<div className="stat">
					<span className="stat-number">{stats.likes}</span>
					<span className="stat-label">Polubienia</span>
				</div>
				<div className="stat">
					<span className="stat-number">{stats.comments}</span>
					<span className="stat-label">Komentarze</span>
				</div>
			</div>
			<div className="dashboard-activities">
				<h2>Ostatnie aktywności</h2>
				<ul>
					{activities.map((activity) => (
						<li key={activity.id}>{activity.text}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Dashboard;
