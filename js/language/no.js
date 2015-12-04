define(['underscore', 'language/en'], function(_, english) {
    return _.defaults({
        // Add/import image functionality
        'ADD_NEW_IMAGES': 'Legg til nye bilder',
        'UPLOAD_IMAGE': 'Last opp bilde',
        'LOAD_FROM_SCANPIX': 'Hent fra Scanpix',
        'UPLOAD_LOCAL_IMAGE': 'Last opp bilde',
        'CONFIRM_DELETE_IMAGE': 'Er du sikker på at du vil slette bildet? ALLE artiklene som bruker dette bildet vil miste det.',
        'CONFIRM_DELETE_IMAGE_SURE': 'Er du helt sikker? Denne handlingen kan ikke omgjøres!',
        'FAILED_TO_DELETE_IMAGE': 'En feil oppstod under sletting av bildet',

        // Image toolbar tooltips
        'USE_IMAGE': 'Bruk bilde',
        'USE_EDIT_IMAGE': 'Bruk eller rediger bilde',
        'SHOW_IMAGE_INFO': 'Vis informasjon',
        'DOWNLOAD_IMAGE': 'Last ned',
        'DELETE_IMAGE': 'Slett bilde',

        // Image results (Showing X out of Y total hits)
        'IMAGE_RESULT_SHOWING': 'Viser',
        'IMAGE_RESULT_OUT_OF': 'av',
        'IMAGE_RESULT_TOTAL_HITS': 'totale treff',

        // Image search
        'IMAGE_SEARCH_FIND_IMAGES': 'Finn bilder',
        'IMAGE_SEARCH_BUTTON': 'Søk',
        'IMAGE_SEARCH_REFRESH_BUTTON': 'Oppdater',

        // Meta editor
        'META_EDITOR_TITLE': 'Bildeinformasjon',
        'META_EDITOR_IMAGE_TITLE': 'Tittel',
        'META_EDITOR_IMAGE_DESCRIPTION': 'Beskrivelse',
        'META_EDITOR_IMAGE_PHOTOGRAPHER': 'Fotograf',
        'META_EDITOR_IMAGE_AGENCY': 'Byrå',
        'META_EDITOR_IMAGE_EXIF': 'EXIF-data',
        'META_EDITOR_SOURCE_IMAGE': 'Originalbilde',
        'META_EDITOR_SAVE_META_DATA': 'Lagre bildeinformasjon',
        'META_EDITOR_SAVING_METADATA': 'Lagrer bildeinformasjon...',
        'META_EDITOR_LOADING_METADATA': 'Laster bildeinformasjon...',
        'META_EDITOR_CORE_TAB': 'Enkel metadata',
        'META_EDITOR_EXIF_TAB': 'Exif metadata',

        // Image editor
        'IMAGE_EDITOR_TITLE': 'Bilderedigering',
        'IMAGE_EDITOR_CROP_SETTINGS': 'Bildebeskjæring',
        'IMAGE_EDITOR_ADJUSTMENTS': 'Bildejustering',
        'IMAGE_EDITOR_CANCEL_BUTTON': 'Avbryt',
        'IMAGE_EDITOR_RESET_BUTTON': 'Tilbakestill',
        'IMAGE_EDITOR_UPDATE_IMAGE': 'Oppdatér bilde',
        'IMAGE_EDITOR_INSERT_IMAGE': 'Sett inn bilde',
        'IMAGE_EDITOR_ROTATION': 'Rotering',
        'IMAGE_EDITOR_SATURATION': 'Fargemetning',
        'IMAGE_EDITOR_CONTRAST': 'Kontrast',
        'IMAGE_EDITOR_BRIGHTNESS': 'Lysstyrke',
        'IMAGE_EDITOR_HUE': 'Fargetone',
        'IMAGE_EDITOR_SHARPNESS': 'Skarphet',
        'IMAGE_EDITOR_CROP_RATIO_UNLOCK': 'Lås opp',
        'IMAGE_EDITOR_LOADING_IMAGE': 'Laster bilde...',

        // Selected image GUI
        'SELECTED_IMAGE_TITLE': 'Valgt bilde',
        'SELECTED_IMAGE_EDIT_IMAGE': 'Rediger bildet',

        // Exif info
        'EXIF_DATE': 'Dato',
        'EXIF_APERTURE': 'Blenderåpning',
        'EXIF_MAX_APERTURE': 'Max blenderåpning',
        'EXIF_BRIGHTNESS': 'Lysstyrke',
        'EXIF_COMPRESSION': 'Komprimering',
        'EXIF_EXPOSURE_TIME': 'Eksponeringstid',
        'EXIF_EXPOSURE_PROGRAM': 'Eksponeringsprogram',
        'EXIF_EXPOSURE_MODE': 'Eksponeringsmodus',
        'EXIF_FLASH': 'Blits',
        'EXIF_FOCAL_LENGTH': 'Brennvidde',
        'EXIF_IMAGE_HEIGHT': 'Bildehøyde',
        'EXIF_IMAGE_WIDTH': 'Bildebredde',
        'EXIF_CAMERA_MAKE': 'Kameraprodusent',
        'EXIF_CAMERA_MODEL': 'Kameramodell',
        'EXIF_METERING_MODE': 'Målingsmodus',
        'EXIF_SCENE_CAPTURE_TYPE': 'Motivprogram',
        'EXIF_SHUTTER_SPEED': 'Lukkerhastighet',
        'EXIF_WHITE_BALANCE': 'Hvitbalanse',
        'EXIF_GPS_LOCATION': 'GPS lokasjon',
        'EXIF_GPS_ALTITUDE': 'GPS høydemeter',
        'EXIF_AUTO': 'Automatisk',
        'EXIF_MANUAL': 'Manuell',
        'EXIF_STANDARD': 'Standard',
        'EXIF_AVERAGE': 'Gjennomsnitt',
        'EXIF_UNKNOWN': 'Ukjent',
        'EXIF_AUTO_BRACKET': 'Auto bracketing (AEB)',
        'EXIF_CENTER_WEIGHTED_AVERAGE': 'Sentermålt gjennomsnitt',
        'EXIF_SPOT_METERING': 'Punktmåling',
        'EXIF_MULTI_SPOT_METERING': 'Flerpunktsmåling',
        'EXIF_PATTERN_METERING': 'Mønstermåling',
        'EXIF_PARTIAL_METERING': 'Begrenset lysmåling',
        'EXIF_SCENE_CAPTURE_LANDSCAPE': 'Landskap',
        'EXIF_SCENE_CAPTURE_PORTRAIT': 'Portrett',
        'EXIF_SCENE_CAPTURE_NIGHT': 'Nattscene',
        'EXIF_APERTURE_PRIORITY': 'Blenderprioritet',
        'EXIF_SHUTTER_PRIORITY': 'Lukkerprioritet',
        'EXIF_CREATIVE_PROGRAM': 'Kreativitetsprogram (dybdeskarphet)',
        'EXIF_ACTION_PROGRAM': 'Actionprogram (lukkerhastighet)',
        'EXIF_PORTRAIT_MODE': 'Portrettmodus (nærbilder)',
        'EXIF_LANDSCAPE_MODE': 'Landskapsmodus (bakgrunnsfokus)',
        'EXIF_LIGHTSOURCE': 'Lyskilde',
        'EXIF_ORIENTATION': 'Orientering',
        'EXIF_F_NUMBER': 'F-nummer',
        'EXIF_SENSOR_TYPE': 'Sensortype'
    }, english);
});
