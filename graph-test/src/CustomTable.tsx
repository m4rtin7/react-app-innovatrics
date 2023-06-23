import { useQuery } from 'urql'
import { DataGrid, GridColDef, GridToolbar } from '@mui/x-data-grid'
import { characterListQuery } from './qraphql/countryListQuery'
import { useTranslation } from 'react-i18next'
import { Character } from './gql/graphql'
import { useState } from 'react'
import { CharacterDetail } from './CharacterDetail'

export const CustomTable = () => {
  const { t } = useTranslation()
  const [{ data: characterList, fetching }] = useQuery({
    query: characterListQuery,
  })
  console.log(characterList)
  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Id', hideable: false },
    { field: 'name', headerName: t('name'), width: 200, hideable: false },
    { field: 'status', headerName: t('status') },
    { field: 'species', headerName: t('species') },
    { field: 'type', headerName: t('type') },
    { field: 'gender', headerName: t('gender') },
    { field: 'origin', headerName: t('origin') },
    { field: 'location', headerName: t('location') },
  ]

  const [selectedCharacter, setSelectedCharacter] = useState<
    Character | undefined
  >()

  const handleRowClick = (characterId: string) => {
    const character = characterList?.characters?.results?.find(
      (char) => char?.id === characterId
    )
    if (!character) return
    setSelectedCharacter(character as Character)
  }

  return (
    <>
      <DataGrid
        columns={columns}
        loading={fetching}
        rows={
          characterList?.characters?.results?.map((char, i) => ({
            ...char,
            origin: char?.origin?.name,
            location: char?.origin?.name,
          })) || []
        }
        onRowClick={(params) => handleRowClick(params.row.id)}
        rowSelection
        slots={{ toolbar: GridToolbar }}
        sx={{
          '& .MuiDataGrid-row': {
            cursor: 'pointer',
          },
        }}
        isRowSelectable={() => false}
        hideFooter={true}
        disableColumnMenu={true}
      ></DataGrid>
      <CharacterDetail
        character={selectedCharacter}
        onClose={() => setSelectedCharacter(undefined)}
      />
    </>
  )
}
