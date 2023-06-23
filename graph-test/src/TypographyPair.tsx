import { Stack, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

type TypographyPairProps = {
  name: string
  text: string | undefined | null
}

export const TypographyPair = ({ name, text }: TypographyPairProps) => {
  const { t } = useTranslation()
  return (
    <Stack gap={1}>
      <Typography color="primary" textTransform="uppercase">
        {name}
      </Typography>
      <Typography>{text || t('unknown')}</Typography>
    </Stack>
  )
}
