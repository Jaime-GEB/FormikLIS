import { useEffect} from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import  { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../hooks/useChangeLang';

export default function NavBar() {
  const { language, setLanguage } = useLanguageStore()
  const { t, i18n } = useTranslation();
  const navigate=useNavigate()

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const handleClick=()=>{
    navigate("/agendas")
  }
  const changeLang =()=>{
    setLanguage(language == 'es' ? 'en' : 'es')
  }
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            {t('navbar.title')}
          </Typography>
          <Typography component="div" sx={{ mr: 1 }}>
            {t('navbar.lang')}
          </Typography>
          <Button color="inherit" onClick={changeLang} sx={{ mr:5 }}>{language}</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}