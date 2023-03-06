import { Typography } from "@mui/material";


const Header=()=>{
    return <div className="header">
        <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          lineHeight: "54px",
          letterSpacing: "0.25px",
          fontFamily: "Open sans",
          fontSize: "36px",
          color: "#404040",
          px:'32px',
          py:'16px',
          borderBottom:'1px solid #D1D1D6',
        }}
      >
        Chat Messenger
      </Typography>
    </div>
}

export default Header;