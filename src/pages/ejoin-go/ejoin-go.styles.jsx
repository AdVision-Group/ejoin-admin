import styled from 'styled-components'
import { motion } from 'framer-motion'

export const MainContainer = styled(motion.main)`
    display: grid;
    grid-template-columns: 40rem 1fr;
`

export const SectionContainer = styled(motion.section)`
    grid-column: 2/3;    
    padding: 5rem 0;
`

