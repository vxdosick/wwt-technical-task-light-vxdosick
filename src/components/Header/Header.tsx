import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import {
	Button,
	ButtonGroup,
	Link as ChakraLink,
	Container,
	Flex,
	List,
	ListItem,
	Spacer
} from '@chakra-ui/react'

export const Header: React.FC = () => {
	const { i18n, t } = useTranslation()
	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
	}

	return (
		<Container
			as="header"
			maxW="100%"
			py={4}
			borderBottom="1px"
			borderColor="green"
		>
			<Flex
				as="div"
				alignItems="center"
				gap="10px"
				direction={{ base: 'column', md: 'row' }}
			>
				<ChakraLink
					as={Link}
					to="/"
					textDecoration="none"
					_hover={{ textDecoration: 'none' }}
				>
					<Button
						color="black"
						fontSize="xl"
						variant="link"
						textDecoration="none"
						_hover={{ textDecoration: 'none' }}
					>
						{t('logo')}
					</Button>
				</ChakraLink>
				<Spacer />
				<List
					as="ul"
					display="flex"
					gap="4"
					alignItems="center"
				>
					<ListItem as="li">
						<ButtonGroup as="div">
							<Button
								as="button"
								color="white"
								size="xs"
								onClick={() => changeLanguage('en')}
							>
								{t('language.en')}
							</Button>
							<Button
								as="button"
								color="white"
								size="xs"
								onClick={() => changeLanguage('ua')}
							>
								{t('language.ua')}
							</Button>
						</ButtonGroup>
					</ListItem>
					<ListItem as="li">
						<ChakraLink
							as={Link}
							to="/"
						>
							<Button
								colorScheme="green"
								size="xs"
								variant="solid"
								borderRadius="9px"
								h="40px"
								fontSize="15px"
							>
								{t('addLink')}
							</Button>
						</ChakraLink>
					</ListItem>
					<ListItem as="li">
						<ChakraLink
							as={Link}
							to="/added-task"
						>
							<Button
								colorScheme="green"
								size="xs"
								variant="solid"
								borderRadius="9px"
								h="40px"
								fontSize="15px"
							>
								{t('addedLink')}
							</Button>
						</ChakraLink>
					</ListItem>
					<ListItem as="li">
						<ChakraLink
							as={Link}
							to="/completed-task"
						>
							<Button
								colorScheme="green"
								size="xs"
								variant="solid"
								borderRadius="9px"
								h="40px"
								fontSize="15px"
							>
								{t('completedLink')}
							</Button>
						</ChakraLink>
					</ListItem>
				</List>
			</Flex>
		</Container>
	)
}
