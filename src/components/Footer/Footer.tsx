import { useTranslation } from 'react-i18next'

import { Center, Container, Heading } from '@chakra-ui/react'

export const Footer: React.FC = () => {
	const { t } = useTranslation()

	return (
		<Container
			as="footer"
			maxW={'100vw'}
			py="4"
			borderTop="1px"
			borderColor="green"
		>
			<Center as="div">
				<Heading
					as="h3"
					size="md"
				>
					{t('logo')}
				</Heading>
			</Center>
		</Container>
	)
}
