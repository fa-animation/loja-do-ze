import { AiFillSafetyCertificate, AiFillHeart } from 'react-icons/ai';
import { FaTruck, FaCity } from 'react-icons/fa'
import { HiEmojiHappy } from 'react-icons/hi'
import { MdPeople } from 'react-icons/md'
import { InfoCardType, StatsType } from '@/types';

export const infoCard: InfoCardType[] = [
  {
    icon: <AiFillHeart color='white' size={22} />,
    title: 'Qualidade na entrega',
    description: 'Nosso compromisso é garantir que cada produto chegue até você com a máxima qualidade e no prazo desejado.',
  },
  {
    icon: <AiFillSafetyCertificate color='white' size={22} />,
    title: 'Segurança',
    description: 'Tenha as melhores práticas de segurança e com visibilidade e monitoria de todas as operações..',
  },
  {
    icon: <FaTruck color='white' size={22} />,
    title: 'Atualização dos conteúdos',
    description: 'Estaremos atualizando novos produtos, atualizado com as principais novidades..',
  },
];

export const statsData: StatsType[] = [
  {
    icon: MdPeople,
    value: 360,
    text: 'USUÁRIOS',
  },
  {
    icon: FaCity,
    value: 180,
    text: 'CIDADES Zé',
  },
  {
    icon: FaTruck,
    value: 370,
    text: 'PEDIDOS ENTREGUES',
  },
  {
    icon: HiEmojiHappy,
    value: 322,
    text: 'CLIENTES FELIZES',
  },
];

export const MARQUEE_TEXT = ["Roupas de crianças", "Saúde", "Lazer", "Brinquedos", "Moda masculina"];

export const MARQUEE_SEPARATOR_COLORS = ["teal.300", "blue.300", "pink.300", "orange.300", "purple.500"];