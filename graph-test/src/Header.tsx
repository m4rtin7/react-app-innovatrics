import { Stack, Switch, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const Header = () => {
  const { t, i18n } = useTranslation()
  const [isEnglish, setIsEnglish] = useState<boolean>(i18n.language === 'en')

  const switchLanguage = () => {
    if (i18n.language === 'en') {
      i18n.changeLanguage('sk')
    } else {
      i18n.changeLanguage('en')
    }
  }

  useEffect(() => {
    setIsEnglish(i18n.language === 'en')
  }, [i18n.language])

  return (
    <Stack
      sx={{
        backgroundColor: 'background.paper',
        minHeight: '80px',
        paddingX: 2,
        marginBottom: 4,
      }}
    >
      <Stack
        direction="row"
        sx={{
          my: 'auto',
          justifyContent: 'space-between',
        }}
      >
        <Typography color="primary" variant="h3" textTransform="uppercase">
          {t('title')}
        </Typography>
        <Stack direction="row" alignItems="center">
          <Typography color="primary">SK</Typography>
          <Switch checked={isEnglish} onClick={switchLanguage} />
          <Typography color="primary">EN</Typography>
        </Stack>
      </Stack>
    </Stack>
  )
}
