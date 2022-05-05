import { VueConstructor } from 'vue';

// Components
import TTAppBar from '@uikit/components/TTAppBar.vue';
import TTAvatar from '@uikit/components/TTAvatar/TTAvatar.vue';
import TTBtn from '@uikit/components/TTBtn/TTBtn.vue';
import TTCheckbox from '@uikit/components/TTCheckbox/TTCheckbox';
import TTChip from '@uikit/components/TTChip/TTChip.vue';
import TTChipGroup from '@uikit/components/TTChipGroup/TTChipGroup.vue';
import TTDataTable from '@uikit/components/TTDataTable/TTDataTable.vue';
import TTModuleMenu from '@uikit/components/TTModuleMenu/TTModuleMenu.vue';
import TTNavigationDrawer from '@uikit/components/TTNavigationDrawer.vue';
import TTRadio from '@uikit/components/TTRadio/TTRadio';
import TTTextarea from '@uikit/components/TTTextarea/TTTextarea.vue';
import TTTextField from '@uikit/components/TTTextField/TTTextField.vue';
import TTToolbarTitle from '@uikit/components/TTToolbarTitle.vue';
import TTTooltip from '@uikit/components/TTTooltip/TTTooltip.vue';
import TTSelect from '@uikit/components/TTTSelect/TTSelect.vue';
import TTAutocomplete from '@uikit/components/TTAutocomplete/TTAutocomplete.vue';
import TTBreadcrumbs from '@uikit/components/TTBreadcrumbs/TTBreadcrumbs.vue';

// Views
import TTView from '@views/TTView.vue';

// App parts
import AppNavbar from '@widgets/AppNavbar.vue';
import AppNavDrawer from '@widgets/AppNavDrawer.vue';

export default {
  TTAppBar,
  TTAvatar,
  TTBtn,
  TTCheckbox,
  TTChip,
  TTChipGroup,
  TTDataTable,
  TTModuleMenu,
  TTNavigationDrawer,
  TTRadio,
  TTAutocomplete,
  TTTextarea,
  TTTextField,
  TTToolbarTitle,
  TTTooltip,
  TTSelect,
  TTBreadcrumbs,
  TTView,
  AppNavbar,
  AppNavDrawer,
} as unknown as Record<string, VueConstructor>;
