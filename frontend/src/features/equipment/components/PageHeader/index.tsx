import AddCircleOutlineOutlined from '@mui/icons-material/AddCircleOutlineOutlined'
import { BrandButton, Container, Description, Title } from './styles'

interface PageHeaderProps {
  // A página passa a ação do botão por props.
  // Assim, este componente só cuida da parte visual do cabeçalho.
  onCreateEquipment: () => void
  title: string
}

export function PageHeader({ onCreateEquipment,title }: PageHeaderProps) {
  return (
    <Container>
      <div>
        <Title>{title}</Title>
        <Description>Gerencie os equipamentos cadastrados no laboratório.</Description>
      </div>

      <BrandButton
        type="primary"
        icon={<AddCircleOutlineOutlined fontSize="small" />}
        onClick={onCreateEquipment}
      >
        Novo equipamento
      </BrandButton>
    </Container>
  )
}
