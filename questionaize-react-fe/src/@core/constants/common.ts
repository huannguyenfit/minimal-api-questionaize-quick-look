import { TypeInputEnum } from '../utils/enums';
import i18n from '../utils/i18n';

export const TYPE_INPUTS = [
  {
    value: TypeInputEnum.SingleSelection,
    display: i18n.t('questions.singleSelection'),
  },
  {
    value: TypeInputEnum.MultipleSelection,
    display: i18n.t('questions.multipleSelection'),
  },
];
