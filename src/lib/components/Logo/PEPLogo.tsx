import { Icon } from '@chakra-ui/react';
import type { IconProps } from '@chakra-ui/react';

const Logo = (props: IconProps) => (
  <Icon width="100%" height="100%" {...props}>
    <svg viewBox="0 0 512 512">
      <path
        fill="#AF996B"
        d="M230.681 61.09c-2.067.892-2.51 2.38-5.758 19.494-2.288 12.352-3.838 20.537-4.429 23.067-.074.372-.369 2.306-.664 4.241-.369 1.935-.886 3.348-1.255 3.125-.369-.223-7.456-8.557-15.871-18.527-8.341-10.045-15.428-18.305-15.723-18.305-3.617-.744-5.463.15-6.201 3.051-.517 2.084-.664 1.935 13.509 19.42 5.462 6.772 11.146 13.766 12.549 15.552 1.402 1.785 3.691 4.539 5.019 6.176 2.067 2.455 27.608 46.876 32.332 56.252 1.182 2.306 1.551 4.167 1.403 6.697-.148 1.86-.443 8.408-.738 14.583-.222 6.102-.591 15.849-.812 21.579-.222 5.729-.517 10.566-.665 10.64-.221.298-8.341-3.944-32.479-16.742-4.872-2.604-9.67-5.059-10.704-5.506-1.476-.521-5.758-7.292-18.011-28.2-15.354-26.341-17.495-30.582-23.327-46.505-4.872-13.468-12.032-31.4-12.844-32.219-2.288-2.306-7.087-.744-7.087 2.381 0 .521 1.994 6.846 4.503 13.914a2909.263 2909.263 0 008.046 23.216c1.994 5.655 3.175 10.194 2.732 9.97-.517-.149-3.174-1.041-6.053-2.009-2.805-.893-5.832-1.934-6.644-2.306-.812-.298-7.456-2.605-14.763-5.134-7.308-2.456-14.026-4.837-14.985-5.209-5.02-2.158-9.744 1.042-7.53 5.209.886 1.636 2.51 2.306 28.789 11.905 12.401 4.539 23.031 8.854 23.695 9.524.665.67 3.47 5.581 6.201 10.938 2.731 5.283 5.979 11.384 7.087 13.542 1.181 2.084 3.395 6.325 4.945 9.301a496.33 496.33 0 014.946 9.375c1.108 2.158 1.846 4.093 1.55 4.39-.295.298-3.248.596-6.569.67-7.604.149-33.661 1.042-41.264 1.339l-5.611.298-5.462-4.464c-2.953-2.456-6.865-5.73-8.711-7.292-25.171-21.43-28.42-23.885-30.634-23.439-2.51.447-3.322 1.488-3.322 4.167 0 1.488 1.181 2.976 5.02 6.325 2.731 2.381 5.093 4.539 5.315 4.762.221.223 2.51 2.232 5.167 4.464 2.657 2.233 4.946 4.242 5.167 4.465.222.223 4.06 3.646 8.637 7.589l8.267 7.144-3.469.818c-1.919.446-4.65.967-6.053 1.191-1.403.297-8.858 1.636-16.609 3.05-7.677 1.414-15.206 2.753-16.609 2.977-6.348.892-8.563 3.422-6.717 7.515.812 1.786 1.107 1.86 5.462 1.488 2.51-.223 5.241-.595 6.053-.744.812-.149 3.1-.595 5.02-.819 1.993-.297 4.134-.669 4.798-.818.738-.075 2.731-.447 4.577-.67 1.845-.223 4.133-.595 5.093-.818.886-.149 7.234-1.191 14.025-2.233 11.959-1.86 12.992-1.86 42.962-1.637l30.782.298 2.805 1.786c15.797 9.747 39.788 25.447 39.788 26.043 0 .446-3.543 2.976-7.898 5.729-4.356 2.753-13.878 8.78-21.186 13.393l-13.213 8.408-31.078.373-31.077.297-16.757-2.604c-9.3-1.488-17.642-2.828-18.675-2.976-10.04-1.637-16.536-2.605-18.012-2.605-2.288 0-4.134 1.786-4.134 4.018 0 3.572.148 3.646 31.373 9.45 4.503.893 10.556 2.083 13.582 2.679l5.537 1.19-1.772 1.414c-2.141 1.711-9.449 8.036-10.63 9.152-.443.447-5.979 5.283-12.254 10.789-6.274 5.506-11.81 10.566-12.327 11.161-2.14 2.605-.074 6.697 3.322 6.697 1.18 0 12.622-8.78 19.783-15.253 5.315-4.763 22.588-18.974 23.843-19.644.664-.298 2.879-.521 4.872-.447 2.067.149 10.703.447 19.193.745 13.361.446 22.292.744 29.01 1.041 1.698.075 1.698.223-1.55 6.176a1447.106 1447.106 0 00-7.234 13.617c-2.141 4.092-5.537 10.417-7.456 14.137-1.993 3.646-4.503 8.408-5.536 10.566-1.477 2.976-2.658 4.167-4.577 4.985-1.476.521-12.254 4.614-24.065 9.004-11.737 4.39-22.44 8.482-23.769 9.077-3.691 1.712-3.765 5.73-.221 7.664 1.181.596 3.395.149 10.556-2.232 4.945-1.711 9.67-3.348 10.482-3.72.812-.372 6.791-2.456 13.287-4.688 6.496-2.306 12.475-4.39 13.213-4.688 1.181-.446 1.329-.297.886.893-.295.744-4.06 11.236-8.341 23.141-5.389 15.179-7.604 22.323-7.308 23.587.369 1.637 1.845 2.605 4.65 3.126 1.624.297 3.691-3.126 6.718-11.236 10.334-28.052 15.797-41.594 19.414-47.77 2.214-3.795 8.415-14.509 13.877-23.81 5.463-9.376 10.778-18.528 11.811-20.462 1.772-3.2 2.658-3.944 10.039-7.739 4.503-2.306 10.483-5.506 13.288-6.994 19.192-10.268 24.138-12.798 24.359-12.575.148.149.443 6.846.812 14.807.296 7.962.591 16.37.665 18.602.074 2.232.295 7.292.369 11.161l.148 7.069-15.207 27.159c-11.737 20.908-16.683 28.944-21.555 35.195-3.543 4.39-6.717 8.408-7.234 8.929-.443.52-4.946 6.101-10.039 12.426-5.02 6.324-9.375 11.682-9.596 11.905-.296.223-.665 1.19-.96 2.158-.59 2.381 1.403 5.283 3.691 5.283s2.288 0 22.736-24.108l11.811-13.989.516 2.53c.296 1.339.665 3.423.886 4.687.222 1.191 1.255 6.4 2.289 11.534 1.919 9.449 1.993 9.97 2.952 15.253.295 1.637.665 3.646.886 4.465.148.818.664 3.422 1.107 5.878 1.108 6.325 3.544 8.185 7.53 5.953 1.845-1.117 1.845-3.646-.369-14.808-.369-2.083-.812-4.762-.96-5.952-.148-1.265-1.181-7.069-2.215-13.022-1.033-5.952-2.066-11.83-2.214-13.021a263.898 263.898 0 00-1.181-6.176l-.738-3.943 14.099-22.844c7.751-12.574 14.32-23.066 14.616-23.364.221-.297 5.315 7.218 11.146 16.668 15.428 24.778 18.307 29.763 18.012 30.656-.296.893-.886 4.018-1.477 7.887-.147 1.414-.664 4.241-1.033 6.325-.443 2.009-.886 4.985-1.181 6.622-.222 1.562-.517 3.571-.738 4.464-1.993 10.641-4.651 28.052-4.356 28.945.296.595 1.255 1.488 2.289 2.009 2.583 1.414 5.241-.149 6.127-3.646.59-2.455 4.06-20.462 4.945-25.745.96-5.655 3.987-20.76 4.282-20.983.147-.149.738.521 1.402 1.414.591.967 2.067 2.827 3.322 4.167a198.16 198.16 0 015.02 5.952c1.624 1.86 4.207 4.985 5.831 6.92 7.677 8.929 10.482 12.277 11.811 13.989 3.765 5.059 7.161 6.473 9.523 4.092 2.14-2.083 1.328-4.464-3.396-10.491-2.51-3.2-4.946-6.176-5.315-6.697-.443-.521-1.181-1.339-1.55-1.86-.443-.521-5.61-6.995-11.516-14.361-10.408-12.947-14.615-19.42-27.829-43.528-.959-1.861-2.952-5.209-4.281-7.516-1.403-2.306-2.51-4.39-2.51-4.539 0-.223-1.698-3.199-3.691-6.622l-3.765-6.25.443-8.185c.148-4.539.517-13.393.812-19.718.222-6.325.517-13.691.665-16.37.147-2.678.295-5.431.295-6.175.074-1.117 1.993-.373 10.999 4.39 23.991 12.649 33.07 17.56 33.882 18.378.738.819 4.798 7.59 26.205 44.347 4.946 8.483 7.234 13.766 15.133 34.6 5.093 13.542 9.818 25.224 10.482 25.968 2.731 2.902 6.791 1.414 6.939-2.604 0-1.339-9.153-28.498-14.616-43.305-.59-1.637-.96-3.051-.812-3.2.074-.149 6.348 1.86 13.804 4.465 29.453 10.268 32.258 11.161 34.251 10.64 3.322-.893 3.913-5.655.886-7.292-.886-.447-12.623-4.911-26.205-9.896-13.509-5.06-24.729-9.301-24.803-9.45-.295-.298-5.315-9.748-10.039-18.825-2.141-4.093-4.798-9.152-5.905-11.161-5.02-9.376-9.597-18.082-9.597-18.379 0-.075 2.215-.223 5.02-.298 2.731 0 11.958-.297 20.447-.595 8.563-.298 18.529-.67 22.293-.819l6.792-.148 5.019 4.241c23.253 19.644 37.647 31.251 38.754 31.251 1.772 0 4.282-2.604 4.282-4.539 0-1.562-1.919-3.646-8.342-9.226-1.845-1.637-9.227-8.036-16.313-14.138-7.013-6.176-12.623-11.384-12.328-11.607.222-.224 6.422-1.489 13.73-2.828 13.066-2.306 15.133-2.679 18.824-3.423 1.033-.148 3.026-.52 4.429-.744 7.898-1.19 10.408-2.009 11.515-3.72 1.698-2.604.665-5.506-2.214-6.176-1.255-.223-2.51-.372-2.805-.298-.295.075-4.725.819-9.966 1.637-5.167.819-10.113 1.637-10.925 1.786-.812.149-2.952.521-4.798.744-1.845.224-8.267 1.265-14.394 2.233-10.778 1.785-12.032 1.86-42.593 1.562l-31.446-.298-8.416-5.506c-4.576-2.976-14.099-9.077-21.038-13.468-7.012-4.464-12.77-8.259-12.77-8.556 0-.224 9.596-6.548 21.333-13.989l21.334-13.542 33.144-.223c18.159-.075 34.103.074 35.285.372 2.436.595 11.737 2.083 23.843 3.943a430.98 430.98 0 0111.589 1.935c11.294 1.934 13.583 1.934 14.837.223 2.51-3.423.369-6.548-4.872-7.441-2.657-.446-13.803-2.53-25.836-4.836-3.838-.744-9.448-1.786-12.327-2.307-2.953-.521-5.389-1.19-5.389-1.488 0-.447 4.208-4.316 12.918-11.905 1.181-1.042 4.06-3.572 6.275-5.581 2.288-2.009 6.422-5.655 9.227-8.11 7.529-6.697 8.489-7.739 8.489-9.599 0-2.009-2.141-4.167-4.06-4.167-1.107 0-5.832 2.977-7.013 4.465-.221.223-5.684 4.911-12.18 10.342-12.918 10.789-12.549 10.492-19.709 16.593l-4.946 4.167-7.234-.223c-3.986-.149-14.69-.521-23.843-.819-15.723-.446-22.957-.744-23.474-.967-.148 0 .369-1.19 1.181-2.53.812-1.265 3.691-6.771 6.422-12.054 2.731-5.357 5.536-10.715 6.275-11.905.664-1.265 2.879-5.283 4.798-8.929 4.207-7.962 6.57-12.575 6.717-12.873.074-.074 10.039-3.869 22.145-8.333 12.107-4.539 23.844-8.929 25.984-9.822 4.651-1.86 5.98-4.092 4.134-6.92-2.067-3.199.222-3.72-32.701 7.738-9.523 3.349-17.347 5.953-17.495 5.879-.074-.149 1.919-6.102 4.503-13.245 10.261-28.721 11.442-32.07 11.442-33.409 0-3.497-5.758-5.134-7.677-2.158-.591.968-3.248 7.59-5.906 14.733-2.731 7.143-5.167 13.691-5.61 14.509-.369.819-2.214 5.655-4.06 10.79-3.469 9.449-4.724 11.83-21.038 39.808-5.02 8.557-10.334 17.783-11.885 20.387-3.026 5.283-1.181 4.093-28.715 18.454-7.529 3.869-14.763 7.738-16.092 8.556-1.329.819-2.584 1.34-2.805 1.117-.443-.372-.664-5.507-1.403-28.052-.295-7.962-.59-16.37-.738-18.602-.221-3.497.074-4.688 1.993-8.185 1.255-2.232 3.101-5.581 4.134-7.441 17.347-31.325 25.615-45.165 31.225-52.16 3.396-4.241 6.348-7.887 6.57-8.11.221-.223 2.362-2.902 4.798-5.953 2.436-3.05 4.577-5.729 4.798-5.952 1.476-1.414 9.892-12.277 10.704-13.914 1.624-3.126-1.403-6.92-4.725-5.804-.664.223-8.415 8.78-17.052 18.974-13.213 15.551-15.944 18.378-16.387 17.188-.443-1.265-1.255-5.209-2.51-12.724a122.474 122.474 0 00-.664-2.976c-.295-.967-4.208-21.355-5.167-26.861-1.034-5.655-3.47-7.962-6.865-6.4-2.363 1.117-2.658 3.2-1.329 10.269 1.771 9.896 1.845 10.343 3.026 17.04.517 3.496 1.55 9.3 2.215 13.021.664 3.646 1.329 7.515 1.476 8.556.222 1.042.591 3.349.96 5.209l.664 3.348-14.173 22.992c-7.824 12.575-14.468 22.918-14.763 22.992-.517.149-15.281-23.14-26.206-41.222-2.879-4.762-2.952-4.91-2.214-8.928.369-2.233.886-5.209 1.107-6.623.222-1.413.591-3.125.738-3.72.148-.595.443-2.307.665-3.721.221-1.413 1.697-10.119 3.248-19.197 2.952-17.56 2.952-19.123-.222-20.239-.812-.297-2.214-.223-3.1.224z"
      />
      <path
        fill="#06C9AF"
        d="M284.346.224c0 .373-1.403 2.233-3.027 4.093-10.556 11.83-15.354 29.465-11.22 41.073 1.55 4.316 6.865 10.268 9.227 10.268s7.382-3.274 9.449-6.101c7.307-9.896 7.972-27.754 1.402-41.148-2.214-4.613-5.758-9.524-5.831-8.185zM219.46 6.921c-8.046 16.37-7.381 35.642 1.477 44.422 2.067 2.083 6.053 4.315 7.677 4.315 2.214 0 6.422-3.869 8.267-7.59 4.356-8.705 3.396-22.098-2.436-33.78C231.788 8.856 225.144.597 223.52.597c-.443 0-2.288 2.827-4.06 6.324zM154.057 17.115c-1.698 7.887-2.067 19.569-.812 25.075 1.698 7.367 6.127 15.849 10.187 19.495 3.174 2.827 6.053 4.167 10.261 4.762 3.248.52 3.543.372 5.315-2.009 2.805-3.795 3.691-7.59 3.248-13.542-.96-12.5-10.556-26.638-22.441-33.037-2.51-1.265-4.65-2.381-4.946-2.381-.221 0-.59.744-.812 1.637zM348.568 18.38c-17.199 10.491-27.238 30.879-21.111 43.007 2.436 4.985 3.395 5.58 7.16 5.06 7.086-1.042 13.065-6.474 17.347-15.551 3.248-6.92 4.65-13.394 4.429-20.909-.222-5.878-1.772-14.51-2.584-14.51-.221 0-2.583 1.34-5.241 2.902zM97.956 55.062c.517 16.221 8.268 31.55 18.897 37.427 3.174 1.712 4.872 2.158 8.563 2.084 5.315 0 6.201-.67 7.53-5.953 3.395-13.244-10.778-32.218-28.716-38.469-6.274-2.232-6.496-2.083-6.274 4.911zM405.039 50.375C391.014 55.435 379.498 66 375.66 77.236c-2.289 6.846 0 16.965 3.838 17.263 6.939.372 10.556-.67 15.576-4.688 9.227-7.366 16.461-23.14 15.796-34.6-.073-1.562-.147-3.646-.221-4.613-.074-1.934-.738-1.934-5.61-.223zM50.86 97.92c-1.918.224-2.066.447-1.623 2.233 1.771 7.218 8.563 19.197 13.582 24.034 2.953 2.827 8.49 6.697 11.737 8.185 7.825 3.646 18.75 1.786 19.562-3.349 1.329-8.482-4.06-17.262-14.69-23.959-8.636-5.432-19.783-8.185-28.567-7.143zM443.423 99.633c-16.24 3.348-28.863 14.137-29.232 25-.221 6.325-.147 6.623 3.174 8.111 8.342 3.795 19.267.074 29.454-10.045 6.127-6.102 9.965-12.724 11.958-20.388l1.108-4.24-5.241.222c-2.879.075-7.973.67-11.221 1.34zM30.782 148.444c-6.939 1.265-10.039 2.009-10.408 2.604-.221.372 1.476 3.423 3.69 6.846 12.328 18.602 32.776 26.935 44.365 17.932 2.953-2.232 3.027-2.976 1.403-8.557-2.14-7.441-11.294-14.36-22.884-17.486-4.207-1.19-13.14-1.934-16.166-1.339zM470.22 149.04c-.148.149-1.477.446-3.027.669-3.912.596-10.408 3.051-14.099 5.209-6.57 3.869-10.704 10.045-10.999 16.221-.148 2.827.074 3.274 2.805 5.134 6.717 4.762 17.052 3.795 28.272-2.455 5.684-3.2 14.764-12.501 17.347-17.858 1.108-2.307 1.994-4.39 1.994-4.539 0-.298-3.322-1.191-7.013-1.786-2.067-.372-14.985-.818-15.28-.595zM25.172 215.187c-.148.149-1.624.447-3.248.67-4.872.67-10.408 2.753-17.938 6.697L0 224.637l3.322 3.274c4.798 4.688 10.63 8.408 16.461 10.417 14.542 5.06 28.641 3.125 34.178-4.688 1.993-2.827 1.919-4.241-.148-7.961-2.14-3.795-6.939-7.441-11.81-9.004-3.396-1.041-16.093-2.157-16.831-1.488zM474.353 215.708c-6.938 1.265-11.958 4.465-15.132 9.45-2.879 4.613-2.731 6.176 1.033 9.971 10.113 10.343 32.923 7.292 48.351-6.548 4.429-3.944 4.65-3.572-3.174-7.664-9.006-4.762-21.998-6.92-31.078-5.209zM30.707 270.77c-8.858 1.191-17.79 5.432-26.131 12.501-4.872 4.018-4.872 3.795 1.107 7.292 6.792 4.018 12.55 5.655 21.038 5.878 8.563.298 12.476-.372 18.233-3.051 4.43-2.009 5.906-3.274 8.637-7.366 2.436-3.646 2.436-5.209.074-8.334-4.355-5.804-12.77-8.333-22.957-6.92zM473.172 270.324c-.147.148-1.55.446-3.174.669-5.684.968-12.918 6.846-12.918 10.566 0 2.679 4.208 8.259 7.677 10.343 6.053 3.572 11.442 4.762 20.595 4.539 8.563-.223 12.107-1.042 19.341-4.688 2.067-.967 4.503-2.455 5.462-3.274l1.846-1.488-2.584-2.381c-9.227-8.706-19.857-13.468-31.52-14.212-2.436-.149-4.577-.223-4.725-.074zM53.074 328.139c-6.79 1.19-15.206 5.878-21.776 12.054-3.986 3.795-11.59 15.253-10.703 16.146 1.255 1.265 10.998 2.828 16.46 2.605 6.792-.298 11.369-1.414 18.234-4.539 8.858-4.093 14.173-10.269 15.428-17.784.517-3.348-.295-4.464-4.798-6.771-4.06-2.009-7.973-2.53-12.845-1.711zM447.115 329.701c-4.872 2.306-5.61 3.348-5.167 6.994 1.255 10.045 9.301 16.817 24.729 20.835 2.657.744 16.461.744 19.34.074 4.429-1.042 5.315-1.19 5.979-1.265 2.215-.223-5.462-12.128-11.073-17.114-10.629-9.599-25.098-13.691-33.808-9.524zM75.959 374.495c-6.791 2.753-10.925 5.952-16.535 12.649-3.027 3.72-8.342 12.798-8.342 14.361 0 .446-.369 1.711-.812 2.901-.443 1.117-.664 2.084-.516 2.158.147 0-.222.596-.812 1.265-1.108 1.414-1.33 1.34 6.643 1.563 10.04.372 21.998-4.465 30.265-12.129 6.57-6.027 9.523-13.095 8.268-19.569-.812-4.316-11.146-6.101-18.16-3.199zM422.015 373.155c-4.282.819-7.751 2.604-7.899 4.167-.295 5.134.222 9.152 1.772 12.203 3.174 6.325 12.77 13.691 21.998 16.816 4.576 1.563 7.381 2.009 15.28 2.53l6.791.372-1.403-4.836c-2.14-7.739-5.684-13.766-11.441-19.495-8.415-8.483-18.086-13.022-25.098-11.757zM119.364 417.949c-2.805.893-4.872 2.381-8.489 6.027-7.973 8.036-12.402 19.346-12.919 32.888l-.295 6.473 3.839-1.116c5.979-1.711 7.898-2.604 12.77-5.655 8.12-5.134 16.019-15.03 18.307-22.991 1.993-6.846-.074-16.221-3.543-16.37-.812-.074-2.51-.149-3.765-.223-1.181-.149-3.838.372-5.905.967zM379.127 417.13c-2.436.372-4.355 5.432-4.281 11.31.147 12.129 11.663 25.224 28.346 32.07 6.127 2.53 7.382 2.679 7.455.818 0-.669.148-2.753.222-4.539.738-14.063-8.858-32.292-19.783-37.65-3.617-1.711-8.637-2.604-11.959-2.009zM169.486 441.908c-9.522 3.571-16.388 16.369-16.978 31.549-.148 4.092.074 8.78.369 10.417.369 1.637.886 4.167 1.107 5.655l.443 2.753 4.651-2.381c6.496-3.274 15.649-12.65 18.897-19.421 4.872-10.045 5.832-17.56 3.027-24.108-.886-2.083-2.141-4.167-2.805-4.687-1.624-1.414-4.577-1.34-8.711.223zM329.375 442.577c-7.235 10.269-4.06 23.885 8.858 38.246 3.321 3.646 14.689 11.31 15.501 10.417 1.55-1.637 2.805-9.598 2.584-16.518-.591-17.933-10.187-32.517-22.293-33.93-2.805-.298-3.322-.149-4.65 1.785zM224.775 457.534c-4.946 2.455-9.08 8.631-10.335 15.551-.812 4.315-.516 14.956.517 19.271 1.181 4.911 3.322 10.194 6.275 15.626l2.214 4.018 4.208-4.688c7.677-8.631 11.884-19.569 11.884-31.4 0-5.58-.295-6.994-2.214-11.235-2.215-4.614-6.127-8.706-8.415-8.706-.591 0-2.436.67-4.134 1.563zM274.527 459.245c-4.207 4.315-5.905 9.152-5.831 16.37.073 2.901.221 6.101.443 7.068 2.066 9.376 5.536 16.444 11.884 24.257l3.986 4.986 2.732-4.391c1.55-2.381 3.617-6.622 4.65-9.524 1.624-4.539 1.92-6.473 1.92-14.509 0-10.045-1.108-14.807-4.577-20.239-2.141-3.2-6.422-6.325-9.523-6.995-1.993-.372-2.731 0-5.684 2.977z"
      />
    </svg>
  </Icon>
);

export default Logo;
