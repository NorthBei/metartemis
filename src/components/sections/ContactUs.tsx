import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import jsonp from 'jsonp';
import { useTranslation } from 'next-export-i18n';
import { useState } from 'react';
import * as Yup from 'yup';

import Section from '@/layout/Section';

function ContactUs() {
  const { t } = useTranslation();
  const [isAlertOpen, setAlertOpen] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      url: '',
      contact_person: '',
      email: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(2, t('contact_form_field_error_name_min_2'))
        .required(t('contact_form_field_error_required')),
      url: Yup.string().url(),
      contact_person: Yup.string()
        .min(3, t('contact_form_field_error_contact_person_min_3'))
        .required(t('contact_form_field_error_required')),
      email: Yup.string()
        .email(t('contact_form_field_error_email_invalid'))
        .required(t('contact_form_field_error_required')),
      phone: Yup.string().required(t('contact_form_field_error_required')),
    }),
    validateOnChange: false,
    onSubmit(values, formikBag) {
      const params = new URLSearchParams({
        'entry.1674756985': values.name,
        'entry.826112742': values.url,
        'entry.1270757990': values.contact_person,
        'entry.58945472': values.email,
        'entry.392286254': values.phone,
      });

      jsonp(
        `https://docs.google.com/forms/u/0/d/e/1FAIpQLSfZ5Wg-wVPCk2vawwa8rciNF0hF21F45UykJpj9NFkw6NxxkA/formResponse?${params.toString()}`,
        { param: 'cb' }
      );

      formikBag.resetForm();
      setAlertOpen(true);
    },
  });

  return (
    <>
      <Snackbar
        open={isAlertOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        autoHideDuration={4000}
        onClose={() => setAlertOpen(false)}
        sx={{ top: '75%' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          {t('contact_form_received_alert')}
        </Alert>
      </Snackbar>

      <Section
        id="contact_us"
        title={t('contact_title')}
        subtitle={t('contact_subtitle')}
      >
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          autoComplete="off"
          maxWidth={400}
          m="0 auto"
        >
          <Stack spacing={3}>
            <TextField
              id="name"
              label={t('contact_form_field_name_label')}
              placeholder={t('contact_form_field_name_placeholder')}
              onChange={formik.handleChange}
              value={formik.values.name}
              helperText={formik.errors.name}
              error={!!formik.errors.name}
              required
            />
            <TextField
              id="url"
              label={t('contact_form_field_url_label')}
              placeholder={t('contact_form_field_url_placeholder')}
              onChange={formik.handleChange}
              value={formik.values.url}
              helperText={formik.errors.url}
              error={!!formik.errors.url}
            />
            <TextField
              required
              id="contact_person"
              label={t('contact_form_field_contact_person_label')}
              placeholder={t('contact_form_field_contact_person_placeholder')}
              onChange={formik.handleChange}
              value={formik.values.contact_person}
              helperText={formik.errors.contact_person}
              error={!!formik.errors.contact_person}
            />

            <TextField
              required
              id="email"
              label={t('contact_form_field_email_label')}
              placeholder={t('contact_form_field_email_placeholder')}
              onChange={formik.handleChange}
              value={formik.values.email}
              helperText={formik.errors.email}
              error={!!formik.errors.email}
            />
            <TextField
              required
              id="phone"
              label={t('contact_form_field_phone_label')}
              placeholder={t('contact_form_field_phone_placeholder')}
              onChange={formik.handleChange}
              value={formik.values.phone}
              helperText={formik.errors.phone}
              error={!!formik.errors.phone}
            />
            <Button type="submit" size="large" variant="contained">
              {t('contact_form_field_submit_button')}
            </Button>
          </Stack>
        </Box>
      </Section>
    </>
  );
}

export default ContactUs;
