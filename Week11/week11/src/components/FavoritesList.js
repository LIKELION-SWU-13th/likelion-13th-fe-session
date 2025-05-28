import React from "react";

function FavoritesList ({ favorites, onRemoveFavorite, loading, onRefresh }) {
    return (
        <div>
            <div className="favorites-header">
                <h2 className="section-title">내가 찜한 목록</h2>
                <button
                    onClick={onRefresh}
                    disabled={loading}
                    className="btn btn-primary"
                >
                    {loading ? '로딩중...' : '새로고침'}
                </button>
            </div>
            {favorites.length === 0 ? (
                <div className="empty-state">
                    <p className="empty-state-title">아직 찜한 영화가 없습니다.</p>
                    <p className="empty-state-text">위의 영화들을 찜해보세요!</p>
                </div>
            ):(
                <div className="favorites-grid">
                    {favorites.map(favorites => (
                        <div key={favorites.id} className="favorite-card">
                            <img
                                src={favorites.poster}
                                alt={favorites.title}
                                className="favorite-poster"
                            />
                            <h3 className="favorite-title">{favorites.title}</h3>
                            <p className="favorite-date">
                                {new Date(favorites.addedAt).toLocaleDateString()}
                            </p>
                            <button
                                onClick={() => onRemoveFavorite(favorites.id, favorites.title)}
                                className="btn btn-danger"
                            >
                                💔 취소
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FavoritesList;