import { Button, Container, Grid, TextField, Toolbar, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";
import { setup } from "@/config/setup";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useRouter } from "next/router";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import Link from "next/link";
export default function Footer() {
  const router = useRouter();
  return (
    <div
      style={{
        backgroundColor: setup.border,
        paddingTop: "3.5rem",
        paddingBottom: "3.5rem",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          "& .MuiButtonBase-root": {
            color: "white",
            fontSize: "1rem",
            fontWeight: "700",
            paddingBottom: "2rem",
          },
          "& .MuiTypography-root": {
            paddingBottom: "0.5rem",
            fontSize: "1.3rem",
            color: "white",
          },
          "& .MuiSvgIcon-root": {
            transform: "scale(1.5)",
            marginRight: "0.5rem",
          },
        }}
      >
        <Grid container spacing={5} sx={{ marginLeft : '1px' }}>
          <Grid item xs={3.5} sx={{ marginLeft: '-5%', marginRight: '5%' }}>
            <Typography
            >
              <img style={{ width: '20rem', height: '100%', top: '0' }} src="assets/images/logo-white.png" alt="" />
            </Typography>
            <Typography variant="body2" sx={{ display: 'flex' }}>
              <LocationOnIcon sx={{ marginTop: '3%' }} />
              {setup.address}
            </Typography>
            <Typography>
              <PhoneIcon />
              123 456789
            </Typography>
            <Typography sx={{ display: 'flex' }}>
              <HeadsetMicOutlinedIcon />
              {setup.email}
            </Typography>
          </Grid>
          <Grid item xs={2.3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "900",
              }}
            >
              CỬA HÀNG
            </Typography>
            <Typography><Link href={`/`} style={{ color : 'white', textDecoration : 'none' }}>Cửa hàng</Link></Typography>
            <Typography><Link href={`/`} style={{ color : 'white', textDecoration : 'none' }}>Sản phẩm</Link></Typography>
            <Typography><Link href={`/`} style={{ color : 'white', textDecoration : 'none' }}>Tin tức</Link></Typography>
            <Typography><Link href={`/`} style={{ color : 'white', textDecoration : 'none' }}>Liên hệ</Link></Typography>
            <Typography><Link href={`/`} style={{ color : 'white', textDecoration : 'none' }}>Về Hommie</Link></Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "700",
              }}
            >
              CHÍNH SÁCH
            </Typography>
            <Typography><Link href={`/`} style={{ color : 'white', textDecoration : 'none' }}>Chính sách bảo mật</Link></Typography>
            <Typography><Link href={`/`} style={{ color : 'white', textDecoration : 'none' }}>Chính sách vận chuyển</Link></Typography>
            <Typography><Link href={`/`} style={{ color : 'white', textDecoration : 'none' }}>Chính sách đổi trả</Link></Typography>
            <Typography><Link href={`/`} style={{ color : 'white', textDecoration : 'none' }}>Chính sách thanh toán</Link></Typography>
            <Typography><Link href={`/`} style={{ color : 'white', textDecoration : 'none' }}>Chính sách kiểm hàng</Link></Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
              }}
            >
              THEO DÕI HOMMIE TẠI
            </Typography>
            <YouTubeIcon sx={{ marginLeft: '2%' }} />
            <FacebookIcon sx={{ marginLeft: '0.5rem' }} />
            <InstagramIcon sx={{ marginLeft: '0.5rem' }} />
            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
              }}
            >
              ĐĂNG KÝ ĐỂ NHẬN TIN
            </Typography>
            <div style={{ display : 'flex' }}> 
              <TextField placeholder="Nhập địa chỉ email" sx={{ backgroundColor: 'white', width: '12rem' }} />
              <Button sx={{ height : '3.4rem', backgroundColor : '#333333', textAlign : 'center', display : 'inline-block', paddingTop : '0.8rem' }}>Gửi</Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
