import {
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { Character } from './gql/graphql'
import { useTranslation } from 'react-i18next'
import { TypographyPair } from './TypographyPair'
import CloseIcon from '@mui/icons-material/Close'

type CharacterDetailProps = {
  character: Character | undefined
  onClose: () => void
}

export const CharacterDetail = ({
  character,
  onClose,
}: CharacterDetailProps) => {
  console.log(character)
  const { t } = useTranslation()
  return (
    <Dialog onClose={onClose} open={!!character}>
      <IconButton
        color="primary"
        sx={{ position: 'absolute', top: 5, right: 5 }}
        onClick={onClose}
      >
        <CloseIcon />
      </IconButton>
      <DialogTitle>
        <Stack>
          <Typography color="primary" textTransform="uppercase" variant="h3">
            {t('detail')}
          </Typography>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Stack direction={{ xl: 'row', mobile: 'column' }} gap={6}>
          <Box
            component="img"
            src={character?.image || ''}
            alt="Character image"
            sx={{ objectFit: 'cover', height: '300px', width: '300px' }}
          />
          <Stack gap={2}>
            <TypographyPair name={t('characterName')} text={character?.name} />
            <TypographyPair
              name={t('characterGender')}
              text={character?.gender}
            />
            <TypographyPair
              name={t('characterSpecies')}
              text={character?.species}
            />
            <TypographyPair
              name={t('characterOrigin')}
              text={character?.origin?.name}
            />
            <TypographyPair
              name={t('characterLocation')}
              text={character?.location?.name}
            />
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  )
}
