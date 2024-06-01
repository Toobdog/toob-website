interface SocialProps {
  className?: string
}

const Social: React.FC<SocialProps> = ({ className }) => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className={className ?? ""}
  >
    <rect width="28" height="28" fill="url(#pattern0_475_52)" />
    <defs>
      <pattern
        id="pattern0_475_52"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_475_52" transform="scale(0.0357143)" />
      </pattern>
      <image
        id="image0_475_52"
        width="28"
        height="28"
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAADM0lEQVRIDbWWUUhTURjHPyR68Mn2sKcQChpGYhSEPZjsIUMS9iAkQgXh62IPYgRJIlIKaaGiohlWe8jSHpI2oiZL50rNWpO0qQnTTdQ1S0yFItaJ/909dY+7c3dDLxzOvbvnfL/z/77/OXdEqV3pN4guthOV5xMdSy2ExllPrNYXfXo9GyOSmpuI7RrUMz4e6k9Lk0CjRAwNz0Sk07he7cPeDA1bPvX0SBAOg8pbRNe0R0li5Py8/+G7ujoBiHQSUXoSYbQPBXCsoUEA2oki2iMkOfK9x3N1amBAACK1e/fpc5IMte1wHR0ozieiTIxa/7EumURZw3aiFh7BYrEcauxofexwOr7Mzc0teb3eYU2G6u3uPHWlpvsbFY5EqMTHqGSSUUZbVej7yojLbBZU8rTabLbS6cmJP1iU8uqz26v5glR7l9NW1Hzfzejs5ygIMEAz2qpW1tcmXhqNAhDGycnLyw2HwwxNeeFZFaL8EauMKgNIboUjkdbGSyfwDgCeUvR4tvf3NwWCASVLuk+oDhYf80zFVfeqoECAYR8+JQr4gsFqNaAWQ+lUgWQyLX5dDgAICJShl+uXCQerAZFqZfZU72NT6mNktNZhMFIEV6Lh8OYB4E6YZWsNkWo+Jm6PDX6uws2oWHYn6ljkWFRO+DDsLYb96frh51Rp6ID1kYGZ2Rmhjn6/f0M5T/UeW8IxNB1TR16PBX9wtPbZHban9QijrpPRVmsIYaFqaeXzVGH4MR6QspstCPrg9SNGTfsZ3cuNNkBNVLO5trG5VSHktjTVl8aF4cXSwuzbM+YhMaXyPkSdJGUchr4+awNfEqj7/fOXkFI8bGscdXXyxieTCQFj1JVT52p4dVktnT6fL7StukGnrex210dZHUwjt9O9LkyEQgEIhZWGDpjI5XIxfqyhl8/RxJ8uKecAwJnos5stfJUwzAWrmdHd4/9rWGtQqtDJJtmZfwA4oJ3ewZg6JnQiX3EKfWZMWuHS6F5MIVyCKXAjrC/UEcCbR90Jpqb2GnstpoYA4sTZ6Qv1g/UFdXw/lh08v9M8xEvHXwfhSINbzYaG3YD9iyk5siLrMkVVJW3/v6qRNZqKNvAfAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
)

export default Social
