function NavBar(){
    return(
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: '16px',
            borderBottom: '1px solid #e0e0e0',
            backgroundColor: '#fafafa',
            position: 'sticky',
            top: 0,
            zIndex: 100,
        }}>
            <div style={{fontWeight: 'bold'}}>GG</div>
            <div style={{display: "flex", flexDirection: "row", alignItems: "center", gap: 12}}>
                <div>홈</div>
                <div>소개</div>
                <div>주문</div>
            </div>
            <div>프로필</div>
        </div>
    );
}

export default NavBar;