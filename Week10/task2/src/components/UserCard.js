import './UserCard.css';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <div className="user-header">
        <div className="user-avatar">
          {user.name.charAt(0)}
        </div>
        <div className="user-info">
          <h3>{user.name}</h3>
          <p className="username">@{user.username}</p>
        </div>
      </div>
      
      <div className="user-details">
        <div className="detail-item">
          <span className="icon">📧</span>
          <span>{user.email}</span>
        </div>
        
        <div className="detail-item">
          <span className="icon">📱</span>
          <span>{user.phone}</span>
        </div>
        
        <div className="detail-item">
          <span className="icon">🌐</span>
          <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
            {user.website}
          </a>
        </div>
        
        <div className="detail-item">
          <span className="icon">🏢</span>
          <span>{user.company.name}</span>
        </div>
        
        <div className="detail-item">
          <span className="icon">📍</span>
          <span>{user.address.city}, {user.address.street}</span>
        </div>
      </div>
      
      <div className="company-tag">
        "{user.company.catchPhrase}"
      </div>
    </div>
  );
}

export default UserCard;